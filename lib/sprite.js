export var Sprite = function(url, offset, size, frames) {
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

