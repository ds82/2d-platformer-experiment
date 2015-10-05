import {ResourceManager} from './resourceManager.js';
import {Level} from './level.js';
import {Player} from './player.js';
import {Keyboard} from './keyboard.js';
import {Sound} from './sound.js';

var canvas = document.getElementById('game');
var screen = canvas.getContext('2d');
var fpsElement = document.getElementById('fps');

export class Game {
  static SPRITE_DELAY = 80;
  static ZOOM = 1.5;

  constructor() {
    var self = this;

    this.lastFrame = 0;
    this.timePassed = 0;
    this.lastFpsUpdate = 0;
    this.fps = 0;

    this.canvas = canvas;
    this.screen = screen;
    this.gameSize = {x: canvas.width, y: canvas.height};

    this.resources = new ResourceManager();
    this.controller = new Keyboard();
    this.sound = new Sound(this);

    this.bodies = [
      new Level(this),
      new Player(this)
    ];

    this.tick(0);
  }

  tick(time = 0) {
    this.timePassed = Math.round(time - this.lastFrame);
    this.fps = this.getFps(time);

    screen.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.bodies.forEach(body => body.update(time));

    this.lastFrame = time;
    window.requestAnimationFrame(this.tick.bind(this));
  }

  getFps(time) {
    var fps = 1000 / (time - this.lastFrame);

    if (time - this.lastFpsUpdate > 1000) {
      this.lastFpsUpdate = time;
      fpsElement.innerHTML = fps.toFixed(0) + ' fps';
    }

    return fps;
  }
};
