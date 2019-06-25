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
    case (actionTypes.MOVE_PIECE_LEFT):
        return {
          ...state,
          position: [state.position[0] - 1, state.position[1]]
         }
    case (actionTypes.MOVE_PIECE_RIGHT):
        return {
          ...state,
          position: [state.position[0] + 1, state.position[1]]
         }
    case (actionTypes.ROTATE_PIECE):
      let newRotation = state.rotation + 1
      if (newRotation === 4) newRotation = 0

      return {
        ...state,
        rotation: newRotation
      }
    default:
      return state
  }
}