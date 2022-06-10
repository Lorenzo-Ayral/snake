const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const ring = () => {
  const audio = new Audio();
  audio.src = "./js/assets/Enter.mp3";
  audio.play();
};

const snake = new Snake(SQUARE_SIZE);
const food = new Food();
const dieText = document.querySelector(".die-text");
const bitchText = document.querySelector(".bitch-text");
const sillySnake = document.getElementById("silly-img");
const score = document.getElementById("show-score");
const highScore = document.getElementById("show-high-score");
let temps = 0;

let currentDirection = "right";

// snake.classList.add("snake");
// console.log(score, highScore);

function scoreIncrease() {
  score.innerText = temps;
  temps++;
}

setInterval(scoreIncrease, 1000);

// console.log(scoreIncrease);

canvas.addEventListener("mouseover", (e) => {
  //   console.log(e);
  sillySnake.classList.add("visible");
  bitchText.classList.add("visible");
});

sillySnake.addEventListener("mouseout", (e) => {
  //   console.log(e);
  sillySnake.classList.remove("visible");
  bitchText.classList.remove("visible");
});

// canvas.addEventListener("mouseover", () => {
//   sillySnake.classList.add("visible");
//   bitchText.classList.add("visible");
// });

function deteckKeyPressed() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;
      default:
        break;
    }
  });
}

function clearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
  clearScreen();
  food.draw();
  snake.update();
  if (snake.alive) {
    setTimeout(update, 100);
  }
}

function start() {
  deteckKeyPressed();
  update();
}

start();
