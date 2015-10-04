export var ResourceManager = function() {
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

