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
      [9, 27, 25, 50],
      [37, 27, 25, 50],
      [64, 27, 25, 50],
      [37, 27, 25, 50]
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

    // LASERSABER
    this.animation.saber = new Animation(game, this.resource.luke, [
      [273, 20, 31, 54],
      [308, 20, 31, 54],
      [341, 20, 31, 54],
      [372, 20, 31, 54],
      [407, 20, 31, 54],
      [440, 20, 31, 54],
    ], {pause: 3000, speed: 0.25});

  }

  init() {

  }

  update() {
    var animation = this.animation.idle;
    var y = this.me.y;

    if (this.game.controller.state[Input.ALT]) {
      animation = this.animation.saber;
    } else if (this.game.controller.state[Input.SPACE]) {
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
