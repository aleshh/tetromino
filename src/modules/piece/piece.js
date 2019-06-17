import pieceTypes from './piece-types'
import pieceLayouts from './piece-layouts'

export default class Piece {
  constructor() {
    this.position = [0, 0]
    this.type = this.randomType()
    this.rotation = 0
  }

  randomType() {
    const pieceTypeIndex = Math.floor(Math.random() * 7)
    switch (pieceTypeIndex) {
      case 0: return pieceTypes.I
      case 1: return pieceTypes.O
      case 2: return pieceTypes.T
      case 3: return pieceTypes.J
      case 4: return pieceTypes.L
      case 5: return pieceTypes.S
      case 6: return pieceTypes.Z
    }
  }

  rotate() {
    this.rotation++
    if (this.rotation === 4) {
      this.rotation = 0
    }
  }

  render() {
    return pieceLayouts[this.type][this.rotation]
  }
}