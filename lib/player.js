import {Sprite} from './sprite.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.resource = this.game.resources.getImage('luke.png');
    this.sprite = new Sprite('../resource/luke.png', {x: 105, y: 205}, {x: 30, y: 55}, 4);
  }

  update() {
    // this.game.screen.fillRect(20,20,20,20);
    this.game.screen.drawImage(
      this.sprite.img,
      this.sprite.getXOffset(),
      this.sprite.getYOffset(),
      this.sprite.size.x,
      this.sprite.size.y,
      10,
      10,
      this.sprite.size.x * 2,
      this.sprite.size.y * 2

    );

    this.sprite.update();
  }
};
