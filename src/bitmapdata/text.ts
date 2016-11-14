import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextState extends BootState {
  bmd: Phaser.BitmapData;
  text: Phaser.Text;

  preload () {

    this.load.image('back', 'assets/pics/swirl1.jpg');

  }

  create () {

    this.add.image(0, 0, 'back');

    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.fill(0, 0, 0, 1);
    this.bmd.addToWorld();

    this.text = this.make.text(0, 0, 'phaser', {font: 'bold 32px Arial', fill: '#ff0044'});
    this.text.anchor.set(0.5);

    this.add.tween(this.text.scale).to({x: 0.5, y: 0.5}, 2000, Phaser.Easing.Linear.None, true, 0, -1, true);

  }

  update () {

    this.bmd.fill(0, 0, 0, 0.05);

    this.text.rotation += 0.05;

    this.bmd.draw(this.text, this.world.randomX, this.world.randomY, null, null, 'destination-out');

  }

}
