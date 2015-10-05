
var element = document.getElementById('keyboard');

export class Keyboard {
  static UP = 38;
  static DOWN = 40;
  static LEFT = 37;
  static RIGHT = 39;
  static SPACE = 32;
  static CTRL = 17;
  static ALT = 18;

  constructor() {
    this.state = {};
    this.bind();
  }

  bind() {
    var self = this;
    window.onkeydown = function(ev) {
      self.state[ev.keyCode] = true;
      self.debug(ev);
    };

    window.onkeyup = function(ev) {
      self.state[ev.keyCode] = false;
      self.debug();
    };

  }

  debug(ev) {
    if (!ev) {
      element.innerHTML = '';
    } else {
      element.innerHTML = 'keyDown: ' + ev.keyCode;
    }
  }
}


