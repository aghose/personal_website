<template>
  <div id="body">
    <div id="game" class="">
      <h1>Tic Tac Toe</h1>
      <div id="board">
        <!-- Make 9 "cell" buttons. These will hold our Xs and Os -->
        <!-- This is being done dynamically using jQuery -->
      </div>
    </div>

    <div id="modal-overlay">
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span></span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button">Start New Game!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src='../css/tic-tac-toe.css'>
</style>

<script>
import $ from 'jquery';

$(document).ready(() => {
  const $board = $('#board');
  for (let i = 0; i < 9; i += 1) {
    const $button = $('<button >').addClass('cell');
    const $span = $('<span />').addClass('cell-content');
    $button.append($span);
    $board.append($button);
  }

  const classNames = {
    cell: 'cell',
    cellContent: 'cell-content',
    populated: 'populated',
    winner: 'winner',
  };

  const user = {
    x: 'X',
    o: 'O',
  };

  let cellValues = ['', '', '', '', '', '', '', '', ''];
  let oIsNext = true;
  let winningUser;
  let counter = 0;
  let winningCombination = [];

  const cells = document.querySelectorAll(`.${classNames.cell}`);
  const modalOverlay = document.querySelector('#modal-overlay');
  const winnerDetails = document.querySelector('#winner-container > span');
  const newGameButton = document.querySelector('#new-game-button');

  function showModalDraw() {
    winnerDetails.innerHTML = 'It\'s a tie!';
    modalOverlay.style.display = 'flex';
  }

  function highlightWinners() {
    cells[winningCombination[0]].classList.add(classNames.winner);
    cells[winningCombination[1]].classList.add(classNames.winner);
    cells[winningCombination[2]].classList.add(classNames.winner);
  }

  function showModal() {
    winnerDetails.innerHTML = `Winner is ${winningUser}!`;
    modalOverlay.style.display = 'flex';
    highlightWinners();
  }

  const winningMatrix = {
    0: [
      [1, 2],
      [3, 6],
      [4, 8],
    ],
    1: [
      [0, 2],
      [4, 7],
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6],
    ],
    3: [
      [0, 6],
      [4, 5],
    ],
    4: [
      [3, 5],
      [1, 7],
      [0, 8],
      [2, 6],
    ],
    5: [
      [3, 4],
      [2, 8],
    ],
    6: [
      [7, 8],
      [0, 3],
      [2, 4],
    ],
    7: [
      [6, 8],
      [1, 4],
    ],
    8: [
      [6, 7],
      [2, 5],
      [0, 4],
    ],
  };

  function calculateWinner(chosenIndex) {
    const winningRanges = winningMatrix[chosenIndex];

    for (let i = 0; i < winningRanges.length; i += 1) {
      const currentUser = cellValues[chosenIndex];

      const firstOption = cellValues[winningRanges[i][0]];
      const secondOption = cellValues[winningRanges[i][1]];

      if (currentUser === firstOption && currentUser === secondOption) {
        winningUser = currentUser;
        winningCombination = [
          chosenIndex,
          winningRanges[i][0],
          winningRanges[i][1],
        ];
        return true;
      } if (counter === 9) {
        showModalDraw();
      }
    }
    return 0;
  }

  cells.forEach((c, i) => {
    c.addEventListener('click', () => {
      if (!cellValues[i]) {
        cellValues[i] = oIsNext ? user.x : user.o;
        oIsNext = !oIsNext;
        counter += 1;
        // console.log(cellValues[i])

        const cellContent = c.querySelector(`.${classNames.cellContent}`);
        cellContent.innerHTML = cellValues[i];
        cellContent.classList.add('populated');

        calculateWinner(i);

        if (winningUser) {
          showModal();
        }
      }
    });
  });

  function startGame() {
    // console.log('startGame function has been reached');
    cellValues = ['', '', '', '', '', '', '', '', ''];
    oIsNext = true;
    winningUser = undefined;
    counter = 0;
    winningCombination = [];

    cells.forEach((c) => {
      c.classList.remove('winner');
      const cellContent = c.querySelector(`.${classNames.cellContent}`);
      cellContent.innerHTML = '';
      cellContent.classList.remove('populated');
    });

    modalOverlay.style.display = 'none';
  }
  newGameButton.addEventListener('click', () => {
    startGame();
  });
});

export default {
  name: 'TicTacToe',
  components: {},
};
</script>
