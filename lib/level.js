import {Game} from './game.js';
import {Keyboard as Input} from './keyboard.js';

const WIDTH = 2;
const HEIGHT = 3;

export class Level {
  static VELOCITY = 120;

  constructor(game) {
    this.game = game;
    this.bg = game.resources.getImage('bg/dune.png');

    this.offset = 0;
    this.coords = [804, 0, 1584, 420];
  }

  init() {

  }

  calculateOffset() {

    var isMoving = this.game.controller.state[Input.LEFT] ||
      this.game.controller.state[Input.RIGHT];

    if (isMoving) {
      var rate = Level.VELOCITY / this.game.fps;
      var offset = this.game.controller.state[Input.LEFT] ?
        this.offset - rate : this.offset + rate;

      var hasSpaceLeft = (offset > 0 && offset < this.coords[WIDTH]);
      this.offset = (hasSpaceLeft) ?
        offset : 0;
    }
  }

  update() {
    this.calculateOffset();
    var [sX, sY, width, height] = this.coords;

    this.game.screen.translate(-this.offset, 0);

    // 1
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

    // 2
    this.game.screen.drawImage(
      this.bg.img,
      sX,
      sY,
      width,
      height,
      width,
      this.game.gameSize.y - height * Game.ZOOM,
      width * Game.ZOOM,
      height * Game.ZOOM
    );

    this.game.screen.translate(this.offset, 0);
  }

}
