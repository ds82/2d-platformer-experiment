import {ResourceManager} from './resourceManager.js';
// import {Sprite} from './sprite.js';
import {Player} from './player.js';

var canvas = document.getElementById('game');
var screen = canvas.getContext('2d');

export class Game {
  constructor() {
    var self = this;
    this.screen = screen;
    this.gameSize = {x: canvas.width, y: canvas.height};

    this.resources = new ResourceManager();
    this.bodies = [new Player(this)];

    function tick() {
      self.bodies.forEach(body => body.update());
      window.requestAnimationFrame(tick);
    }

    tick();
  }
};
