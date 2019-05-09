import Board from './Board'
import config from '../config'

const renderBoard = () => {
  return shallow(<Board />)
}

describe('<Board />', () => {
  const board = renderBoard()
  const cells = board.children().children().children().first().props()

  it('Builds board with correct number of rows', () => {
    expect(board.find('tr').length).toEqual(config.boardHeight)
  })

  it('Builds board with correct number of cells', () => {
    const cellsExpected = config.boardWidth * config.boardHeight
    expect(board.find('td').length).toEqual(cellsExpected)
  })

  it('Assigns correct ID to first cell', () => {
    const firstCell = board.find('td').first()
    expect(firstCell.find('#c-0-0').length).toEqual(1)
  })

  it('Assigns correct ID to first cell', () => {
    const lastCell = board.find('td').last()
    const lastRow = config.boardHeight - 1
    const lastCol = config.boardWidth - 1
    const lastCellId = '#c-' + lastRow + '-' + lastCol
    expect(lastCell.find(lastCellId).length).toEqual(1)
  })

})