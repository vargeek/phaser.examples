import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenDelayState extends BootState {
  text: Phaser.Text;

  preload () {

    this.load.image(AssetID.back, 'assets/pics/TheBrightestLightComesFromTheDarkestPlace_by_Slayer_Ghostown.png');

  }

  create () {

    let pic = this.add.image(this.world.centerX, this.world.centerY, AssetID.back);
    pic.anchor.set(0.5);
    pic.alpha = 0.1;

    this.text = this.add.text(this.world.centerX, 100, '2000ms delay', {font: '32px Arial', fill: '#ff0044', align: 'center'});
    this.text.anchor.set(0.5);

    // delay=2000
    let tween = this.add.tween(pic).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true, 2000);

    // 2000ms 后start, 触发 onTweenStart
    tween.onStart.add(this.onTweenStart, this);
    tween.onComplete.add(this.onTweenCompleted, this);

  }

  onTweenStart () {

    this.text.text = 'tween started';

  }

  onTweenCompleted () {

    this.text.text = 'tween complete';

  }

}
