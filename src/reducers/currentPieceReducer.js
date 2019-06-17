import actionTypes from '../actions/types'

export default function(state={}, action) {
  switch (action.type) {
    case (actionTypes.NEW_PIECE):
      return action.payload
    default:
      return state
  }
}