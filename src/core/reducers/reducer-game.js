import constants from 'core/types'

const initialState = {
    timestamp: '',
    wager: '',
    playerNumber: '',
    guess: ''
}

export function gameReducer(state = initialState, action) {
    switch (action.type) {

    case constants.ROUND_RESULTS:

        return Object.assign({}, state, {
            timestamp: action.timestamp,
            wager: action.wager,
            playerNumber: action.playerNumber,
            guess: action.guess
        })

    default:
        return state
    }
}
