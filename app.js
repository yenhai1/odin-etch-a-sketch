const container = document.querySelector("#container");
container.style.cssText =
  "box-sizing: border-box; height: 80svh; aspect-ratio: 1; background-color: aliceblue; border: 1px solid salmon; display: flex; flex-direction: column";
let dimension = parseInt(prompt("Enter a valid dimension from 1 to 64: "));

while (!(Number.isInteger(dimension) && dimension >= 1 && dimension <= 64)) {
  alert(`${dimension} is not a valid input.`);
  dimension = parseInt(prompt("Enter a valid dimension from 1 to 64: "));
}

for (let i = 0; i < dimension; i++) {
  const row = document.createElement("div");
  row.style.cssText = "flex: 1; display: flex";
  container.appendChild(row);
  for (let j = 0; j < dimension; j++) {
    const col = document.createElement("div");
    col.classList.add("square");
    col.style.cssText = "border: 0.5px solid salmon; flex: 1";
    row.appendChild(col);
  }
}

const squares = document.querySelectorAll(".square");

// Color squares from light to dark; or
// Enter fixed rgb values and optinally alpha value for single color

squares.forEach((square) => {
  // let red = parseInt(Math.random() * 255);
  // let green = parseInt(Math.random() * 255);
  // let blue = parseInt(Math.random() * 255);
  // let alpha = 0;

  let red = 255;
  let green = 180;
  let blue = 180;
  let alpha = 0;

  square.addEventListener("mouseenter", function (event) {
    alpha += 0.1;

    if (alpha > 1) {
      alpha = 1;
    }
    event.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  });
});
