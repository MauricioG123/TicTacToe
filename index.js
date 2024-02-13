const board = [
  [" - ", " - ", " - "],
  [" - ", " - ", " - "],
  [" - ", " - ", " - "],
];

var player = "x";

var win = false;

function switchTurns() {
  if (player == "x") {
    player = "o";
    return;
  }

  if (player == "o") {
    player = "x";
    return;
  }
}

function checkWin() {
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      console.log(player + " wins");
      return (win = true);
    }
  }

  for (var j = 0; j < 3; j++) {
    if (
      board[0][j] === player &&
      board[1][j] === player &&
      board[2][j] === player
    ) {
      console.log(player + " wins");
      return (win = true);
    }
  }

  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    console.log(player + " wins");
    return (win = true);
  }
}

function move(x, y) {
  if (board[x][y] === "x" || board[x][y] === "o") {
    return;
  } else {
    board[x].splice(y, 1, player);
  }

  checkWin();
  switchTurns();
}

while (win == false) {
  var input = prompt(board[0] + "\n" + board[1] + "\n" + board[2] + "\n");

  if (input == "1") {
    move(0, 0);
  }

  if (input == "2") {
    move(0, 1);
  }

  if (input == "3") {
    move(0, 2);
  }

  if (input == "4") {
    move(1, 0);
  }

  if (input == "5") {
    move(1, 1);
  }

  if (input == "6") {
    move(1, 2);
  }

  if (input == "7") {
    move(2, 0);
  }

  if (input == "8") {
    move(2, 1);
  }

  if (input == "9") {
    move(2, 2);
  }

  if (input == "kill") {
    win = true;
  }
}
