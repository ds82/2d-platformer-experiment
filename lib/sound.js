
const BG = {
  'hangar': '05-the-hangar.mp3',
  'easyFight': '37-easy-fight.mp3'
}

export class Sound {
  static BG = BG;

  constructor(game) {
    this.game = game;
    this.sounds = {};
  }

  play(what, {loop = false, volume = 0.5} = {}) {
    if (!this.sounds[what]) {
      this.sounds[what] = this.game.resources.getSound(what);
    }

    this.sounds[what].audio.loop = loop;
    this.sounds[what].audio.volume = volume;

    this.sounds[what].audio.play();
  }
}
