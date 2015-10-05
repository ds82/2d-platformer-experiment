import {Game} from './game.js';
/*
 * An animation is a series of images in a sprite
 *
 * resource: an object from the resourceManager
 * frames: array of position and size information
 */
export class Animation {
  constructor(game, resource, frames, {speed = 1, pause = 0, waitFrame = 0} = {}) {
    this.game = game;
    this.resource = resource;
    this.frames = frames;

    this.tick = 0;
    this.lastUpdate = 0;

    this.speed = speed;
    this.pause = pause;
    this.waitFrame = waitFrame;
  }

  update() {
    var isWaitFrame = this.tick === this.waitFrame;
    var timeShouldWait = (this.pause > 0 && isWaitFrame) ?
      Game.SPRITE_DELAY / this.speed + this.pause : Game.SPRITE_DELAY / this.speed;
    var waitedAlready = this.lastUpdate + this.game.timePassed;

    if (waitedAlready > timeShouldWait) {
      this.tick = (this.tick + 1) % this.frames.length;
      this.lastUpdate = 0;
    } else {
      this.lastUpdate += this.game.timePassed;
    }
  }

  getFrame() {
    return this.frames[this.tick];
  }

  draw(screen, x, y, {sizeX = false, sizeY = false} = {}) {
    var [dX, dY, width, height] = this.getFrame();
    screen.drawImage(
      this.resource.img,
      dX,
      dY,
      width,
      height,
      x,
      y,
      sizeX || width * Game.ZOOM,
      sizeY || height * Game.ZOOM
    );
    this.update();
  }
}

