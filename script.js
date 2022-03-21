const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;
const BALL_SIZE = 20;
const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;

let positionX = 100;
let positionY = 100;
let velocityX = 4;
let velocityY = 4;

const ball = document.querySelector(".ball");

const computer = document.querySelector(".computer-paddle");
let computerPositionY = 100;

const player = document.querySelector(".player-paddle");
let playerPositionY = 100;

function handleKeyboardInput(event) {
  if (event.key === "ArrowDown") {
    playerPositionY += 50;
  } else if (event.key === "ArrowUp") {
    playerPositionY -= 50;
  }
}
document.addEventListener("keydown", handleKeyboardInput);

function update() {
  positionX += velocityX;
  positionY += velocityY;

  computerPositionY = positionY;

  if (positionY >= GAME_AREA_HEIGHT - BALL_SIZE) {
    velocityY = -velocityY;
  }

  if (positionY <= 0) {
    velocityY = -velocityY;
  }

  if (positionX <= 0 || positionX >= GAME_AREA_WIDTH - BALL_SIZE) {
    positionX = 100;
    positionY = 100;
  }

  if (
    positionX >= GAME_AREA_WIDTH - BALL_SIZE - PADDLE_WIDTH &&
    positionY >= computerPositionY - BALL_SIZE &&
    positionY <= computerPositionY + PADDLE_HEIGHT
  ) {
    velocityX = -velocityX;
  }

  if (
    positionX <= PADDLE_WIDTH &&
    positionY >= playerPositionY - BALL_SIZE &&
    positionY <= playerPositionY + PADDLE_HEIGHT
  ) {
    velocityX = -velocityX;
  }

  ball.style.top = `${positionY}px`;
  ball.style.left = `${positionX}px`;

  computer.style.top = `${computerPositionY}px`;
  player.style.top = `${playerPositionY}px`;
}

function loop() {
  update();
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
