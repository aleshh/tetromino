import React, { Component } from 'react'
import pieceLayouts from '../modules/piece/piece-layouts';

export default class Board extends Component {

  buildBoard = () => {
    let tableRows = []
    for (let row = 0; row < this.props.config.boardHeight; row++) {
      tableRows.push(this.buildRow(row))
    }
    return (
        <tbody>{ tableRows }</tbody>
      )
  }

  buildRow = row => {
    let tableCells = []
    for (let column = 0; column < this.props.config.boardWidth; column++) {
      const hasPiece = this.isPieceAt(row, column)
      tableCells.push(
        <td
          key={column.toString()}
          id={ 'c-' + row + '-' + column }
          className={ hasPiece ? 'piece-' + this.currentPiece.type : null }
        />
      )
    }
    return(
      <tr key={ row.toString()} >
        { tableCells }
      </tr>
    )
  }

  isPieceAt = (row, column) => {
    // false if there's no piece
    if (!this.currentPiece || !this.currentPiece.position) return false;

    const pieceX = this.currentPiece.position[0]
    const pieceY = this.currentPiece.position[1]

    const x = column - pieceX
    const y = row - pieceY

    // false if the offset is greater than the piece size
    if(!this.pieceLayout[y]) return false;

    return this.pieceLayout[y][x]
  }

  render() {
    if (this.props.currentPiece.position) {
      this.hasPiece = true
      this.currentPiece = this.props.currentPiece
      this.pieceLayout = pieceLayouts[this.currentPiece.type][this.currentPiece.rotation]
    }

    return (
      <div>
        <table>
          { this.buildBoard() }
        </table>
      </div>
    )
  }
}
