import {Game} from './game.js';

export class Level {
  constructor(game) {
    this.game = game;
    this.bg = game.resources.getImage('bg/dune.png');

    this.coords = [804, 0, 1584, 420];
  }

  init() {

  }

  update() {
    var [sX, sY, width, height] = this.coords;
    this.game.screen.drawImage(
      this.bg.img,
      sX,
      sY,
      width,
      height,
      0,
      this.game.gameSize.y - height * Game.ZOOM,
      width * Game.ZOOM,
      height * Game.ZOOM
    );
  }

}
