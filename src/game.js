import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./bricks";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);

    this.paddle = new Paddle(this);

    let brick = [];

    for (let i = 0; i < 10; i++) {
      brick.push(new Brick(this, { x: i * 52, y: 30 }));
    }

    this.gameObjects = [this.ball, this.paddle, ...brick];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
