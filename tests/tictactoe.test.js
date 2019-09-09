const { TicTacToe } = require('../index');

let tictactoe;

beforeEach(() => {
  tictactoe = new TicTacToe({
    p1: { name: 'derp', symbol: '😋' },
    p2: { name: 'gerp', symbol: '😎' }
  });
});

test('Players alternate turns selecting positions', () => {
  tictactoe.selectPosition('A1');
  const { A1 } = tictactoe.getPositions();
  expect(A1).toBe('😋');

  expect(tictactoe.activePlayer.name).toBe('gerp');

  tictactoe.selectPosition('C2');
  const { C2 } = tictactoe.getPositions();
  expect(C2).toBe('😎');

  expect(tictactoe.activePlayer.name).toBe('derp');
});

test('Player 1 wins', () => {
  tictactoe.selectPosition('A1');

  let result = tictactoe.checkForWinner();
  expect(result).toBeFalsy();

  tictactoe.selectPosition('C2');
  tictactoe.selectPosition('A2');
  tictactoe.selectPosition('C3');
  tictactoe.selectPosition('A3');

  result = tictactoe.checkForWinner();
  expect(result).toBeTruthy();
});
