var basePath = '/resource/';

export class ResourceManager {
  constructor() {
    this.resource = {};
  }

  getImage(url) {
    if (!this.resource[url]) {
      var res = {};
      res.img = new window.Image();
      res.img.src = basePath + url;

      this.resource[url] = res;
    }
    return this.resource[url];
  }
};

