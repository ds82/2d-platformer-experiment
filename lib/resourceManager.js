const BASE_PATH = '/resource/';
const SOUND_PATH = BASE_PATH + 'sound/';

export class ResourceManager {
  constructor() {
    this.resource = {};
  }

  getImage(url) {
    if (!this.resource[url]) {
      var res = {};
      res.img = new window.Image();
      res.img.src = BASE_PATH + url;

      this.resource[url] = res;
    }
    return this.resource[url];
  }

  getSound(url) {
    url = SOUND_PATH + url;

    if (!this.resource[url]) {
      var res = {};
      res.audio = new window.Audio(url);

      this.resource[url] = res;
    }
    return this.resource[url];
  }
};

