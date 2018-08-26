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
        console.log('Transaction result: ', result)
        resolve(result.logs[0])
    })
    .catch(error => {
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
    }))
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
            dispatchRoundComplete(event, dispatch)
        })
        .catch(error => {
            dispatchRoundFailed(error, dispatch)
        })
    }
}
