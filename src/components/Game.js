import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Board from './Board'
import { newPiece } from '../actions/pieceActions'

export class Game extends Component {
  static propTypes = {
    newPiece: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    this.props.newPiece()
  }

  render() {
    return (
      <div>
        <Board config={this.props.configuration} currentPiece={this.props.currentPiece} />
        {/* <Board configuration={configuration} currentPiece={this.props.currentPiece} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPiece: state.currentPieceReducer,
  configuration: state.configurationReducer
})

const mapDispatchToProps = {
  newPiece
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
