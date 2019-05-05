import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Board from './Board'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const renderBoard = () => {
  return shallow(<Board />)
}

describe('Render board correctly', () => {
  test('Builds board with correct number of cells', () => {
    const board = renderBoard()
  })
})