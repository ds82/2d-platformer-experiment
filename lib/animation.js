import {Game} from './game.js';
/*
 * An animation is a series of images in a sprite
 *
 * resource: an object from the resourceManager
 * frames: array of position and size information
 */
export class Animation {
  constructor(game, resource, frames) {
    this.game = game;
    this.resource = resource;
    this.frames = frames;

    this.tick = 0;
    this.lastUpdate = 0;
  }

  update() {
    if (this.lastUpdate + this.game.timePassed > Game.SPRITE_DELAY) {
      this.tick = (this.tick + 1) % this.frames.length;
      this.lastUpdate = 0;
    } else {
      this.lastUpdate += this.game.timePassed;
    }
  }

  getFrame() {
    return this.frames[this.tick];
  }
}

