const { Board } = require('../index');
let board;

beforeEach(() => {
  board = new Board();
});

test('Board positions initalize as null', () => {
  const positions = board.getPositions();
  for (position in positions) {
    expect(positions[position]).toBeNull();
  }
});

test('Selected position changes correctly', () => {
  const activePlayer = { name: 'derp', symbol: '😋' };
  board.selectPosition(activePlayer, 'B1');

  const { B1 } = board.getPositions();
  expect(B1).toBe('😋');
});

describe('Setting up multiple positions', () => {
  beforeEach(() => {
    let activePlayer = { name: 'derp', symbol: '😋' };
    board.selectPosition(activePlayer, 'B3');

    activePlayer = { name: 'gerp', symbol: '😎' };
    board.selectPosition(activePlayer, 'C2');

    activePlayer = { name: 'derp', symbol: '😋' };
    board.selectPosition(activePlayer, 'A1');
  });

  test('Selected position changes correctly', () => {
    const { B3, C2, A1 } = board.getPositions();
    expect(B3).toBe('😋');
    expect(C2).toBe('😎');
    expect(A1).toBe('😋');
  });

  test('Board positions are all null after reset', () => {
    board.resetBoard();
    const positions = board.getPositions();
    for (position in positions) {
      expect(positions[position]).toBeNull();
    }
  });
});
