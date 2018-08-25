import constants from 'core/types'

export function playRound(wager, playerNumber, guess) {
    return (dispatch) => {
        console.log('Lets play')

        dispatch((() => {
            return {
                type: constants.ROUND_RESULTS,
                timestamp: Date.now(),
                wager: wager,
                playerNumber: playerNumber,
                guess: guess
            }
        })())
    }
}
