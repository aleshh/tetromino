import actionTypes from '../actions/types'

export default function(state={}, action) {
  switch (action.type) {
    case (actionTypes.NEW_PIECE):
      return action.payload
    case (actionTypes.MOVE_PIECE_DOWN):
        return {
          ...state,
          position: [state.position[0], state.position[1] + 1]
         }
    default:
      return state
  }
}