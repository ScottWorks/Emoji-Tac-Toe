const validatePlayer = (players) => {
  if (players && players.p1 && players.p2) {
    if (
      validatePlayerName(players.p1) &&
      validatePlayerName(players.p2) &&
      validatePlayerSymbol(players.p1) &&
      validatePlayerSymbol(players.p2)
    ) {
      return true;
    }
  }
  throw 'Invalid Player Configuration';
};

const validatePlayerName = (player) => {
  return player.name && player.name.length > 1 ? true : false;
};

const validatePlayerSymbol = (player) => {
  return player.symbol && player.symbol.length > 1 ? true : false;
};

module.exports = {
  validatePlayer
};
