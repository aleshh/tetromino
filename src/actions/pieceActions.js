import actionTypes from './types'
import Piece from '../modules/piece/piece'

export const newPiece = () => dispatch => {
  dispatch({
    type: actionTypes.NEW_PIECE,
    payload: new Piece()
  })
}