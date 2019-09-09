const { checkRows, checkColumns, checkDiagonal } = require('../Utility');

describe('checkRows', () => {
  describe('returns true', () => {
    test('A row is filled out', () => {
      const positions = {
          A1: 'X',
          A2: 'X',
          A3: 'X',
          B1: null,
          B2: null,
          B3: null,
          C1: null,
          C2: null,
          C3: null
        },
        result = checkRows(positions);

      expect(result).toBeTruthy();
    });

    test('B row is filled out', () => {
      const positions = {
          A1: null,
          A2: null,
          A3: null,
          B1: 'X',
          B2: 'X',
          B3: 'X',
          C1: null,
          C2: null,
          C3: null
        },
        result = checkRows(positions);

      expect(result).toBeTruthy();
    });

    test('C row is filled out', () => {
      const positions = {
          A1: null,
          A2: null,
          A3: null,
          B1: null,
          B2: null,
          B3: null,
          C1: 'X',
          C2: 'X',
          C3: 'X'
        },
        result = checkRows(positions);

      expect(result).toBeTruthy();
    });
  });

  describe('returns false', () => {
    test('sequence contains null value', () => {
      const positions = {
          A1: null,
          A2: 'O',
          A3: 'X',
          B1: null,
          B2: null,
          B3: null,
          C1: null,
          C2: null,
          C3: null
        },
        result = checkRows(positions);

      expect(result).toBeFalsy();
    });
    test('sequence interrupted', () => {
      const positions = {
          A1: 'X',
          A2: 'O',
          A3: 'X',
          B1: null,
          B2: null,
          B3: null,
          C1: null,
          C2: null,
          C3: null
        },
        result = checkRows(positions);

      expect(result).toBeFalsy();
    });
  });
});
