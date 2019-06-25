import actionTypes from './types'
import Piece from '../modules/piece/piece'

export const newPiece = () => (dispatch, getState) => {
  const initialPieceX = (getState().configurationReducer.boardWidth / 2) - 2
  dispatch({
    type: actionTypes.NEW_PIECE,
    payload: new Piece(initialPieceX)
  })
}

export const movePieceDown = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.MOVE_PIECE_DOWN
  })
}

export const movePieceLeft = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.MOVE_PIECE_LEFT
  })
}

export const movePieceRight = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.MOVE_PIECE_RIGHT
  })
}

export const rotatePiece = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ROTATE_PIECE
  })
}
