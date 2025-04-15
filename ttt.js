const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.status');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    if (checkWinner()) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
    } else if (board.every(cell => cell !== '')) {
        statusText.textContent = 'It\'s a draw!';
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

