import { BootState } from '../boot.state';
import { AssetID } from '../constant';

interface IKeys {
  [name: string]: Phaser.Key;
}
export class SoundCompleteState extends BootState {
  explosion: Phaser.Sound;
  sword: Phaser.Sound;
  blaster: Phaser.Sound;
  keys: IKeys;

  text: Phaser.Text;

  text1: Phaser.Text;
  text2: Phaser.Text;
  text3: Phaser.Text;

  preload () {

    this.load.audio('explosion', 'assets/audio/SoundEffects/explosion.mp3');
    this.load.audio('sword', 'assets/audio/SoundEffects/sword.mp3');
    this.load.audio('blaster', 'assets/audio/SoundEffects/blaster.mp3');

  }

  create () {

    this.stage.backgroundColor = '#414040';

    let style = {
      font: '65px Arial',
      fill: '#52bace',
      align: 'center',
    }
    this.text = this.add.text(this.world.centerX, 100, 'decoding', style);
    this.text.anchor.set(0.5);

    this.explosion = this.add.audio('explosion');
    this.sword = this.add.audio('sword');
    this.blaster = this.add.audio('blaster');

    this.sound.setDecodedCallback([this.explosion, this.sword, this.blaster], this.start, this);
  }

  start () {

    this.text.text = 'Press 1, 2 or 3';

    let style = {
      font: '48px Arial',
      fill: '#cdba52',
      align: 'center',
    }

    this.text1 = this.add.text(this.world.centerX, 250, 'Blaster: Stopped', style);
    this.text1.anchor.set(0.5);

    this.text2 = this.add.text(this.world.centerX, 350, 'Explosion: Stopped', style);
    this.text2.anchor.set(0.5);

    this.text3 = this.add.text(this.world.centerX, 450, 'Sword: Stopped', style);
    this.text3.anchor.set(0.5);

    // http://localhost:3000/Phaser.Sound.html#onStop
    // onStop :Phaser.Signal
    // The onStop event is dispatched when this sound stops playback.
    this.explosion.onStop.add(this.soundStopped, this);
    this.sword.onStop.add(this.soundStopped, this);
    this.blaster.onStop.add(this.soundStopped, this);

    this.keys = this.input.keyboard.addKeys({
      blaster: Phaser.Keyboard.ONE,
      explosion: Phaser.Keyboard.TWO,
      sword: Phaser.Keyboard.THREE,
    });

    this.keys['blaster'].onDown.add(this.playFx, this);
    this.keys['explosion'].onDown.add(this.playFx, this);
    this.keys['sword'].onDown.add(this.playFx, this);

    this.input.onDown.add(this.onTouch, this);

  }

  soundStopped (sound: Phaser.Sound) {

    if (sound === this.blaster)
    {
        this.text1.text = "Blaster: Complete";
    }
    else if (sound === this.explosion)
    {
        this.text2.text = "Explosion: Complete";
    }
    else if (sound === this.sword)
    {
        this.text3.text = "Sword: Complete";
    }

  }

  playFx (key: Phaser.Key) {

    switch (key.keyCode) {
      case Phaser.Keyboard.ONE:
        this.text1.text = 'Blaster: Playing';
        this.blaster.play();
        break;
      case Phaser.Keyboard.TWO:
        this.text2.text = 'Explosion: Playing';
        this.explosion.play();
        break;
      case Phaser.Keyboard.THREE:
        this.text3.text = 'Sword: Playing';
        this.sword.play();
        break;

      default:
        break;
    }

  }

  onTouch (pointer: Phaser.Pointer) {

    let b = this.game.height / 3;

    if (pointer.y < b) {
      this.playFx(this.keys['blaster']);
    }
    else if (pointer.y > b * 2) {
      this.playFx(this.keys['sword']);
    }
    else {
      this.playFx(this.keys['explosion']);
    }

  }

  render () {
    let width = this.game.width;
    let height = this.game.height / 3;
    this.game.debug.rectangle(new Phaser.Rectangle(0, height, width, 1));
    this.game.debug.rectangle(new Phaser.Rectangle(0, height * 2, width, 1));
  }


}
