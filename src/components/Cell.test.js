import Cell from './Cell'

const renderCell = () => {
  return shallow(<Cell />)
}

describe('Render cell correctly', () => {
  test('Cell exists', () => {
    const board = renderCell()
  })
})