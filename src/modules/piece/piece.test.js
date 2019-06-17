import Piece from './piece'
import pieceTypes from './piece-types'
import pieceLayouts from './piece-layouts'

describe('Piece object functions correctly', () => {
  const piece = new Piece

  test('Constructor returns piece with position', () => {
    expect(piece.position.length).toEqual(2)
  })

  test('Constructor returns piece with a valid type', () => {
    expect(pieceTypes[piece.type]).not.toBeUndefined()
  })

  test('10 pieces do not all have the same type', () => {
    const pieces = []
    for (let i = 0; i < 10; i++) {
      pieces.push(new Piece)
    }
    const allPiecesAreIdentical = pieces.every(piece => (
      piece.type === pieces[0].type
    ))
    expect(allPiecesAreIdentical).toBeFalsy()
  })

  test('Constructor returns piece with a valid rotation', () => {
    expect(piece.rotation).toEqual(0)
  })

  test('Piece rotatation updates', () => {
    const piece = new Piece
    for (let i = 0; i < 6; i++) {
      piece.rotate()
    }
    expect(piece.rotation).toEqual(2)
  })

  test('Piece I returns correct squares', () => {
    const piece = new Piece
    piece.type = pieceTypes.J

    const pieceLayout = piece.render()
    const expectedLayout = pieceLayouts[pieceTypes.J][0]

    expect(pieceLayout).toEqual(expectedLayout)
  })

  test('Piece L returns correct squares', () => {
    const piece = new Piece
    piece.type = pieceTypes.L

    const pieceLayout = piece.render()
    const expectedLayout = pieceLayouts[pieceTypes.L][0]

    expect(pieceLayout).toEqual(expectedLayout)
  })

  test('Piece L returns correct squares when rotated', () => {
    const piece = new Piece
    piece.type = pieceTypes.L
    piece.rotate()
    piece.rotate()

    const pieceLayout = piece.render()
    const expectedLayout = pieceLayouts[pieceTypes.L][2]

    expect(pieceLayout).toEqual(expectedLayout)
  })

  test('Piece T returns correct squares, deep check', () => {
    const piece = new Piece
    piece.type = pieceTypes.T

    const pieceLayout = piece.render()
    const firstSquare = pieceLayout[0][0]
    const secondSquare = pieceLayout[0][1]

    expect(firstSquare).toBeFalsy()
    expect(secondSquare).toBeTruthy()
  })
})