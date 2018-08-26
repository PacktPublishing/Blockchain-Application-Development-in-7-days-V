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
    success: ''
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {

    case constants.ROUND_RESULTS:
        return Object.assign({}, state, {
            transactionHash: action.transactionHash,
            wager: web3.utils.fromWei(action.wager.toString(), 'ether'),
            playerNumber: action.playerNumber.toNumber(),
            mysteryNumber: action.mysteryNumber.toNumber(),
            guess: action.guess ? 'higher' : 'lower',
            result: action.result,
            error: action.error,
            success: action.success
        })

    default:
        return state
    }
}
