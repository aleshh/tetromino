import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import Board from './Board'
import { newPiece, movePieceDown, movePieceLeft, movePieceRight, rotatePiece } from '../actions/pieceActions'

export class Game extends Component {
  static propTypes = {
    newPiece: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    this.props.newPiece()

    let gameStep = 0;
    const gameLoop = setInterval(() => {
      this.props.movePieceDown()
      if (gameStep === 10) {
        clearInterval(gameLoop)
      }
      gameStep++
    }, this.props.configuration.refreshRate);
  }

  handleKeyEvent = (key, e) => {
    switch(key) {
      case('left'):
        this.props.movePieceLeft()
        break
      case('right'):
        this.props.movePieceRight()
        break
      case('down'):
        this.props.rotatePiece()
        break
      default:
        throw new Error('Key handler not catching a key event')
    }
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['down', 'left', 'right']}
          onKeyEvent={this.handleKeyEvent}
        />
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
  newPiece, movePieceDown, movePieceLeft, movePieceRight, rotatePiece
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
