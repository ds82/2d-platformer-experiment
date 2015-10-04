import {ResourceManager} from './resourceManager.js';
import {Sprite} from './sprite.js';

var canvas = document.getElementById('game');
var screen = canvas.getContext('2d');

export var Game = function() {
  self = this;
  this.screen = screen;
  this.gameSize = {x: canvas.width, y: canvas.height};
  this.bodies = [new Player(this)];

  this.resources = new ResourceManager();

  function tick() {
    self.bodies.forEach(function(body) {
      body.update();
    });
    requestAnimationFrame(tick);
  }

  tick();
};

Game.prototype = {

};


var Player = function(game) {
  this.game = game;
  this.sprite = new Sprite('../resource/luke.png', {x: 105, y: 205}, {x: 30, y: 55}, 4);
};

Player.prototype = {
  update: function() {
    // this.game.screen.fillRect(20,20,20,20);
    this.game.screen.drawImage(
      this.sprite.img,
      this.sprite.getXOffset(),
      this.sprite.getYOffset(),
      this.sprite.size.x,
      this.sprite.size.y,
      10,
      10,
      this.sprite.size.x*2,
      this.sprite.size.y*2

    );

    this.sprite.update();
  }
};

