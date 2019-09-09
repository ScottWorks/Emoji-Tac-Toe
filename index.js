const { validatePlayer } = require('./Validation');
const { checkRows, checkColumns, checkDiagonal } = require('./Utility');

function TicTacToe(players) {
  this.board = null;
  this.activePlayer = null;
  this.player1 = null;
  this.player2 = null;
  this.scoreboard = null;

  try {
    validatePlayer(players);
    this.board = new Board();
    this.player1 = new Player(players.p1);
    this.player2 = new Player(players.p2);
    this.scoreboard = new Scoreboard();
    this.activePlayer = this.player1;
  } catch (error) {
    return error;
  }
}

TicTacToe.prototype.newGame = function() {
  this.board.resetBoard();
  this.startGame();
};

TicTacToe.prototype.setActivePlayer = function() {
  this.activePlayer =
    this.activePlayer === this.player1 ? this.player2 : this.player1;
};

TicTacToe.prototype.selectPosition = function(position) {
  this.board.selectPosition(this.activePlayer, position);
  this.setActivePlayer();
};

TicTacToe.prototype.getPositions = function() {
  return this.board.getPositions();
};

TicTacToe.prototype.checkForWinner = function() {
  const positions = this.board.getPositions();

  if (
    checkRows(positions) ||
    checkColumns(positions) ||
    checkDiagonal(positions)
  ) {
    return true;
  }

  return false;
};

function Board() {
  let positions = {
    A1: null,
    A2: null,
    A3: null,
    B1: null,
    B2: null,
    B3: null,
    C1: null,
    C2: null,
    C3: null
  };

  this.resetBoard = function() {
    for (var position in positions) {
      positions[position] = null;
    }
  };

  this.selectPosition = function(activePlayer, position) {
    if (positions[position] === null) {
      positions[position] = activePlayer.symbol;
    } else {
      console.log('Try again');
    }
  };

  this.getPositions = function() {
    return positions;
  };
}

function Player(data) {
  this.name = data.name;
  this.symbol = data.symbol;
}

function Scoreboard() {
  this.player1Score = 0;
  this.player2Score = 0;
}

Scoreboard.prototype.addPoint = function(player) {
  this[player]++;
};

module.exports = {
  TicTacToe,
  Board,
  Player,
  Scoreboard
};
