import { combineReducers } from 'redux'
import configurationReducer from './configurationReducer'
import currentPieceReducer from './currentPieceReducer'
import boardReducer from './boardReducer'

export default combineReducers({
  configurationReducer,
  currentPieceReducer,
  boardReducer
})