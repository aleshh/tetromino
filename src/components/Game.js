import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Board from './Board'
import { newPiece, movePieceDown, movePieceLeft, movePieceRight } from '../actions/pieceActions'

export class Game extends Component {
  static propTypes = {
    newPiece: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    this.props.newPiece()

    setInterval(() => {
      this.props.movePieceDown()
    }, this.props.configuration.refreshRate);
  }

  render() {
    return (
      <div>
        <Board config={this.props.configuration} currentPiece={this.props.currentPiece} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPiece: state.currentPieceReducer,
  configuration: state.configurationReducer
})

const mapDispatchToProps = {
  newPiece, movePieceDown, movePieceLeft, movePieceRight
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
