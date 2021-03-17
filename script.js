// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the ball
const ball = document.querySelector(".ball");


// Initial ball y-position and y-velocity
let ballPositionY = 0;
let ballYVelocity = 1;

// Initial ball x-position and x-velocity
let ballPositionX = 0;
let ballXVelocity = 1;

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {

    //Updates ball position
    ballPositionY = ballPositionY + ballYVelocity;
    ballPositionX += ballXVelocity;

    // brings back ball if it goes off the screen
    ballPositionY = ballPositionY % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);
    ballPositionX = ballPositionX % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    ball.style.top = `${ballPositionY}px`;
    ball.style.left = `${ballPositionX}px`;

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);