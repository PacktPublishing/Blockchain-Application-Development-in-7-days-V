import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import { gameReducer }     from 'core/reducers/reducer-game'

const rootReducer = combineReducers({
  provider: providerReducer,
  game: gameReducer
})

export default rootReducer
