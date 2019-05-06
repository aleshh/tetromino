import { combineReducers } from 'redux'
import currentPieceReducer from './currentPieceReducer'
import boardReducer from './boardReducer'

export default combineReducers({
  currentPieceReducer,
  boardReducer
})