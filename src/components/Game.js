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
        <Board />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  newPiece
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
