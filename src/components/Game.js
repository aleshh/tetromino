import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Board from './Board'

export class Game extends Component {
  static propTypes = {

  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    console.log('Start game.')
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
