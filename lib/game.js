import {ResourceManager} from './resourceManager.js';
import {Level} from './level.js';
import {Player} from './player.js';

var canvas = document.getElementById('game');
var screen = canvas.getContext('2d');

export class Game {
  static SPRITE_DELAY = 80;
  static ZOOM = 1.5;

  constructor() {
    var self = this;

    this.lastFrame = 0;
    this.timePassed = 0;

    this.screen = screen;
    this.gameSize = {x: canvas.width, y: canvas.height};

    this.resources = new ResourceManager();
    this.bodies = [
      new Level(this),
      new Player(this)
    ];

    this.tick(0);
  }

  tick(time = 0) {
    // console.log(time);
    this.timePassed = Math.round(time - this.lastFrame);

    screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.bodies.forEach(body => body.update(time));

    this.lastFrame = time;
    window.requestAnimationFrame(this.tick.bind(this));
  }
};
