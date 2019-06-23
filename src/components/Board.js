import React, { Component } from 'react'

export default class Board extends Component {

  buildBoard = () => {
    let tableRows = []
    for (let i = 0; i < this.props.config.boardHeight; i++) {
      tableRows.push(this.buildRow(i))
    }
    return (
        <tbody>{ tableRows }</tbody>
      )
  }

  buildRow = rowId => {
    let tableCells = []
    for (let i = 0; i < this.props.config.boardWidth; i++) {
      tableCells.push(
        <td key={i.toString()} id={ 'c-' + rowId + '-' + i } />
      )
    }
    return(
      <tr key={ rowId.toString()} >
        { tableCells }
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table>
          { this.buildBoard() }
        </table>
      </div>
    )
  }
}
