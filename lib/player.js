import {Animation} from './animation.js';
import {Keyboard as Input} from './keyboard.js';

export class Player {
  constructor(game) {
    this.game = game;

    this.resource = {};
    this.resource.luke = this.game.resources.getImage('luke.png');

    this.me = {
      height: 55,
      width: 25
    };
    this.me.x = (this.game.gameSize.x / 2 - this.me.width / 2);
    this.me.y = (this.game.gameSize.y - (this.me.height * 1.7));

    this.animation = {};

    // IDLE
    this.animation.idle = new Animation(game, this.resource.luke, [
      [9, 28, 25, 50],
      [37, 28, 25, 50],
      [64, 28, 25, 50],
      [37, 28, 25, 50]
    ], {pause: 5000, speed: 0.15});

    // WALK
    this.animation.walk = new Animation(game, this.resource.luke, [
      [110, 204, 25, 55],
      [138, 204, 25, 55],
      [164, 204, 25, 55],
      [193, 204, 25, 55]
    ]);

    // JUMP
    this.animation.jump = new Animation(game, this.resource.luke, [
      [5, 134, 28, 45],
      [38, 134, 28, 45],
      [66, 134, 28, 45],
    ]);

  }

  init() {

  }

  update() {
    var animation = this.animation.idle;
    var y = this.me.y;

    if (this.game.controller.state[Input.SPACE]) {
      animation = this.animation.jump;
      y = y - 25;
    } else if (this.game.controller.state[Input.RIGHT] || this.game.controller.state[Input.LEFT]) {
      animation = this.animation.walk;
    }

    animation.draw(
      this.game.screen,
      this.me.x,
      y
    );
  }
};
