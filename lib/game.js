var canvas = document.getElementById('game');
var screen = canvas.getContext('2d');

var ResourceManager = function() {
  this.resource = {};
};

ResourceManager.prototype = {
  getImage: function(url) {
    if (!this.resource[url]) {
      this.resource[url] = new Image();
      this.resource[url].src = url;
    }
    return this.resource[url];
  }
};

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


var Animation = function() {

};

Animation.prototype = {

};

var Sprite = function(url, offset, size, frames) {
  this.img = new Image();
  this.img.src = url;

  this.offset = offset;
  this.size = size;
  this.frames = frames;

  this.tick = 0;
  this.slow = 0;
};

Sprite.prototype = {
  getXOffset: function() {
    return this.offset.x + this.tick * this.size.x;
  },

  getYOffset: function() {
    return this.offset.y;
  },

  update: function() {
    this.slow += 1;
    if (this.slow > 5) {
      this.tick = (this.tick + 1) % this.frames;
      this.slow = 0;
    }
  }
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

