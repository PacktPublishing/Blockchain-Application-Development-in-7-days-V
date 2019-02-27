import constants    from 'core/types'
import web3         from 'web3'

const initialState = {
    transactionHash: '',
    wager: '',
    playerNumber: '',
    mysteryNumber: '',
    guess: '',
    result: '',
    error: '',
    wins: 0,
    losses: 0,
    success: ''
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {

    case constants.ROUND_RESULTS:
        let wager
        let playerNumber
        let mysteryNumber
        if (typeof(action.wager) !== 'undefined') {
            wager = action.wager.toString()
        } else {
            wager = '0'
        }
        if (typeof(action.playerNumber) !== 'undefined') {
            playerNumber = action.playerNumber.toNumber()
        }
        if (typeof(action.mysteryNumber) !== 'undefined') {
            mysteryNumber = action.mysteryNumber.toNumber()
        }
        return Object.assign({}, state, {
            transactionHash: action.transactionHash,
            wager: web3.utils.fromWei(wager, 'ether'),
            playerNumber: playerNumber,
            mysteryNumber: mysteryNumber,
            guess: action.guess ? 'higher' : 'lower',
            result: action.result,
            error: action.error,
            success: action.success
        })

    case constants.STATS:
        console.log('reducer ', action)
        return Object.assign({}, state, {
            wins: action.wins,
            losses: action.losses,
            success: action.success
        })

    default:
        return state
    }
}
