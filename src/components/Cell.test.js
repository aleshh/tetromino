import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Cell from './Cell'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const renderCell = () => {
  return shallow(<Cell />)
}

describe('Render cell correctly', () => {
  test('Cell exists', () => {
    const board = renderCell()
  })
})