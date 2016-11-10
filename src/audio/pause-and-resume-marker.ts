import { BootState } from '../boot.state';
import { AssetID } from '../constant';

var audioJSON = {
  spritemap: {
    'part1': {
      start: 1,
      end: 20,
      loop: false
    },
    'part2': {
      start: 21,
      end: 60,
      loop: false
    }
  }
};

export class PauseAndResumeMarkerState extends BootState {
  sprite: Phaser.Sprite;
  music: Phaser.AudioSprite;

  preload () {

    this.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');
    this.load.audiosprite('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg'], null, audioJSON);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audioSprite('boden');
    // http://localhost:3000/Phaser.AudioSprite.html#get
    // get(marker) → {Phaser.Sound}
    // marker{string}
    // Get a sound with the given name.
    this.music.get('part2').onDecoded.addOnce(()=>{this.music.play('part2')});

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'disk');
    this.sprite.anchor.set(0.5);

    this.input.onDown.add(this.pauseAndResume, this);

  }

  pauseAndResume (pointer: Phaser.Pointer) {

    if (pointer.y < 300) {
      this.music.get('part2').pause();
    }
    else {
      this.music.get('part2').resume();
    }

  }

  update () {

    this.sprite.rotation += 0.01;

  }

}
