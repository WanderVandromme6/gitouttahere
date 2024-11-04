document.addEventListener("DOMContentLoaded", () => {
  const gridCells = document.querySelectorAll(".grid-cell");
  const square = document.querySelector(".square");

  // Generate a random cell index to place the square
  const randomIndex = Math.floor(Math.random() * gridCells.length);

  // Append the square to the randomly selected cell
  gridCells[randomIndex].appendChild(square);

  // Make the square visible only when hovered
  square.addEventListener("mouseenter", () => {
    square.style.opacity = "1";
  });

  // Hide the square again when not hovered
  square.addEventListener("mouseleave", () => {
    square.style.opacity = "0";
  });
});