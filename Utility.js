'use strict';

const checkRows = (positions) => {
  const { A1, A2, A3, B1, B2, B3, C1, C2, C3 } = positions;

  if (
    (A1 !== null && A1 === A2 && A2 === A3) ||
    (B1 !== null && B1 === B2 && B2 === B3) ||
    (C1 !== null && C1 === C2 && C2 === C3)
  ) {
    return true;
  }

  return false;
};

const checkColumns = (positions) => {
  const { A1, A2, A3, B1, B2, B3, C1, C2, C3 } = positions;

  if (
    (A1 !== null && A1 === B1 && B1 === C1) ||
    (A2 !== null && A2 === B2 && B2 === C2) ||
    (A3 !== null && A3 === B3 && B3 === C3)
  ) {
    return true;
  }

  return false;
};

const checkDiagonal = (positions) => {
  const { A1, A2, A3, B1, B2, B3, C1, C2, C3 } = positions;

  if (
    (A1 !== null && A1 === B2 && B2 === C3) ||
    (C1 !== null && C1 === B2 && B2 === A3)
  ) {
    return true;
  }

  return false;
};

module.exports = {
  checkRows,
  checkColumns,
  checkDiagonal
};
