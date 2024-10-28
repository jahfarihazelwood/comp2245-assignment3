document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const newGameButton = document.querySelector(".btn");
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);
    const statusDiv = document.getElementById("status");

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach((square, index) => {
        square.addEventListener("click", () => handleClick(square, index));
        square.addEventListener("mouseover", () => {
            if (!gameState[index]) {
                square.classList.add("hover");
            }
        });
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    newGameButton.addEventListener("click", resetGame);

    function handleClick(square, index) {
        if (gameState[index] || checkWinner()) return;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;
        if (checkWinner()) {
            updateStatus(currentPlayer);
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }

    function updateStatus(winner) {
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add("you-won");
    }

    function resetGame() {
        gameState.fill(null);
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        currentPlayer = "X";
    }
});
