// Ensure the code runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the #board element
    const squares = document.querySelectorAll("#board div");

    // Add the 'square' class to each div element in the board
    squares.forEach(square => {
        square.classList.add("square");
    });
});
