import actionTypes from './types'
import Piece from '../modules/piece/piece'

export const newPiece = () => (dispatch, getState) => {
  const initialPieceX = (getState().configurationReducer.boardWidth / 2) - 2
  dispatch({
    type: actionTypes.NEW_PIECE,
    payload: new Piece(initialPieceX)
  })
}