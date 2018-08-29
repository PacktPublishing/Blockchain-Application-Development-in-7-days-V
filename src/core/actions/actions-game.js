import constants    from '../../core/types'
import contract     from 'truffle-contract'
import Gaming  from '../../../build/contracts/Gaming.json'
import web3         from 'web3'

function winOrLose(GamingContract, wager, playerNumber, guess, resolve, reject) {
    GamingContract.deployed().then((gameContract) => {
        let guessToBool
        if (guess === 'higher') { guessToBool = true }
        if (guess === 'lower') { guessToBool = false }
        return gameContract.winOrLose(
            playerNumber,
            guessToBool,
            {
                value: web3.utils.toWei(wager, 'ether')
            }
        )
    })
    .then((result) => {
        resolve(result.logs[0])
    })
    .catch(error => {
        console.log(error)
        reject(error)
    })
}

function players(GamingContract, address, resolve, reject) {
    console.log('calling contract')
    GamingContract.deployed().then((gameContract) => {
        return gameContract.players(address)
    })
    .then((result) => {
        console.log('contract complete')
        resolve(result)
    })
    .catch((error) => {
        console.log(error)
        reject(error)
    })
}

function dispatchRoundComplete(event, dispatch) {
    dispatch((() => {
        return {
            type: constants.ROUND_RESULTS,
            transactionHash: event.transactionHash,
            wager: event.args.wager,
            playerNumber: event.args.playerNumber,
            mysteryNumber: event.args.mysteryNumber,
            guess: event.args.guess,
            result: event.args.result,
            success: true
        }
    })())
}

function dispatchRoundFailed(error, dispatch) {
    dispatch((() => {
        return {
            type: constants.ROUND_RESULTS,
            timestamp: Date.now(),
            error: error,
            success: false
        }
    })())
}

function dispatchStatsComplete(event, dispatch) {
    console.log('dispatching score')
    dispatch((() => {
        return {
            type: constants.STATS,
            wins: event[0],
            losses: event[1],
            success: true
        }
    })())
}

function dispatchStatsFailed(error, dispatch) {
    dispatch((() => {
        return {
            type: constants.STATS,
            success: false
        }
    })())
}

export function getScore() {
    console.log('getting score')
    return (dispatch, getState) => {
        const { web3Provider } = getState().provider
        const GamingContract = contract(Gaming)
        GamingContract.setProvider(web3Provider.currentProvider)
        GamingContract.defaults({from: web3Provider.eth.defaultAccount})

        return new Promise((resolve, reject) => {
            players(GamingContract, web3Provider.eth.defaultAccount, resolve, reject)
        })
        .then(event => {
            dispatchStatsComplete(event, dispatch)
        })
        .catch(error => {
            dispatchStatsFailed(error, dispatch)
        })
    }
}

export function playRound(wager, playerNumber, guess) {
    return (dispatch, getState) => {
        const { web3Provider } = getState().provider
        const GamingContract = contract(Gaming)
        GamingContract.setProvider(web3Provider.currentProvider)
        GamingContract.defaults({from: web3Provider.eth.defaultAccount})

        return new Promise((resolve, reject) => {
            winOrLose(GamingContract, wager, playerNumber, guess, resolve, reject)
        })
        .then(event => {
            getScore()
            dispatchRoundComplete(event, dispatch)
        })
        .catch(error => {
            dispatchRoundFailed(error, dispatch)
        })
    }
}
