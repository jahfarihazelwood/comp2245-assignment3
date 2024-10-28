document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div"); // Select squares
    let currentPlayer = "X"; // Track the current player
    const gameState = Array(9).fill(null); // Initialize the game state

    // Add event listeners to all squares
    squares.forEach((square, index) => {
        square.addEventListener("click", () => handleClick(square, index));
        
        // Add mouseover and mouseout event listeners for hover effect
        square.addEventListener("mouseover", () => {
            if (!gameState[index]) { // Only apply hover effect if square is empty
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // Handle the square click event
    function handleClick(square, index) {
        // If the square is already filled, do nothing
        if (gameState[index]) return;

        // Update the square's content and class
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Update the game state
        gameState[index] = currentPlayer;

        // Switch the player for the next turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
});
