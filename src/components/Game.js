import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import Board from './Board'
import { newPiece, movePieceDown, movePieceLeft, movePieceRight, rotatePiece } from '../actions/pieceActions'
import pieceLayouts from '../modules/piece/piece-layouts'

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
       if(this.checkForCollision()) {
        this.props.newPiece()
      }
      this.props.movePieceDown()
      if (gameStep === 5) {
        clearInterval(gameLoop)
      }
      gameStep++
    }, this.props.configuration.refreshRate);
  }

  checkForCollision() {
    if (this.pieceBottomPosition() === this.props.configuration.boardHeight - 1) {
      console.log('landed! piece bottom position:', this.pieceBottomPosition())
    }
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

  pieceBottomPosition = () => {
    const piece = this.props.currentPiece;
    if (!piece.position) {
      return null
    }
    console.log('piece bottom position:', piece.position[1] + this.pieceBottomEdge())
    return piece.position[1] + this.pieceBottomEdge()
  }

  pieceBottomEdge = () => {
    const piece = this.props.currentPiece
    const layout = pieceLayouts[piece.type][piece.rotation]
    for (let i = 3; i > 0; i--) {
      if (layout[i].indexOf(true) > -1) return i
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
