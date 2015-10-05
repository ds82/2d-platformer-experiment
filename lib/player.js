// import {Sprite} from './sprite.js';
import {Animation} from './animation.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.resource = this.game.resources.getImage('luke.png');

    this.animation = new Animation(game, this.resource, [
      [110, 204, 25, 50],
      [138, 204, 25, 50],
      [164, 204, 25, 50],
      [193, 204, 25, 50]
    ]);
    // this.sprite = new Sprite('../resource/luke.png', {x: 105, y: 205}, {x: 30, y: 55}, 4);
  }

  update(time) {
    var [dX, dY, width, height] = this.animation.getFrame();
    this.game.screen.drawImage(
      this.resource.img,
      dX,
      dY,
      width,
      height,
      10,
      10,
      width * 2,
      height * 2
    );

    this.animation.update(time);
  }
};
