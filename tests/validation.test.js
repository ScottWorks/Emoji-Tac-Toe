const { validatePlayer } = require('../Validation');

test('Player configuration is missing', () => {
  expect(() => validatePlayer()).toThrow();
});

test('Player name is empty', () => {
  const players = {
    p1: { name: '', symbol: '😋' },
    p2: { name: 'gerp', symbol: '😎' }
  };

  expect(() => validatePlayer(players)).toThrow();
});

test('Player symbol is empty', () => {
  const players = {
    p1: { name: 'derp', symbol: '' },
    p2: { name: 'gerp', symbol: '😎' }
  };

  expect(() => validatePlayer(players)).toThrow();
});

test('Player symbol is missing', () => {
  const players = {
    p1: { name: 'derp' },
    p2: { name: 'gerp', symbol: '😎' }
  };

  expect(() => validatePlayer(players)).toThrow();
});

test('Player2 configuration is missing', () => {
  const players = {
    p1: { name: 'derp', symbol: '😋' }
  };

  expect(() => validatePlayer(players)).toThrow();
});

test('Players successfully validated', () => {
  const players = {
    p1: { name: 'derp', symbol: '😋' },
    p2: { name: 'gerp', symbol: '😎' }
  };

  expect(() => validatePlayer(players)).toBeTruthy();
});
