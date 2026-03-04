 
const colors = [
  "#ef96f7", // coral 
  "#33ff77", // coral
  "#d40365", // coral
  "#FF5733", // coral
  "#ffe81c", // green
  "#33FF57", // green
  "#8898dd", // blue
  "#ea23d0", // blue
  "#F1C40F", // yellow
  "#9B59B6", // purple
  "#1ABC9C", // teal
  "#E67E22", // orange
  "#E84393", // pink
  "#2C3E50", // dark blue
  "#95A5A6"  // gray
];
 const button = document.getElementById("btn");
 
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
  button.addEventListener("click", function() {
      document.body.style.backgroundColor = getRandomColor();
  });








