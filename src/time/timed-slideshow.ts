import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TimedSlideshowState extends BootState {
  pictureA: Phaser.Sprite;
  pictureB: Phaser.Sprite;
  timer: Phaser.Timer;
  current = 3;

  preload () {

    this.load.image('picture1', 'assets/pics/cougar_sanity_train.png');
    this.load.image('picture2', 'assets/pics/cougar-face_of_nature.png');
    this.load.image('picture3', 'assets/pics/destop-rewarding.png');
    // this.load.image('picture4', 'assets/pics/destop-unknown.png');
    this.load.image('picture4', 'assets/pics/cougar-face_of_nature.png');
    this.load.image('picture5', 'assets/pics/questar.png');
    this.load.image('picture6', 'assets/pics/seven_seas_andromeda_fairfax.png');
    this.load.image('picture7', 'assets/pics/slayer-sorry_im_the_beast.png');

  }

  create () {

    this.stage.backgroundColor = '#000';

    this.pictureA = this.add.sprite(this.world.centerX, this.world.centerY, 'picture1');
    this.pictureA.anchor.set(0.5);
    this.pictureA.scale.set(2);

    this.pictureB = this.add.sprite(this.world.centerX, this.world.centerY, 'picture2');
    this.pictureB.anchor.set(0.5);
    this.pictureB.scale.set(2);
    this.pictureB.alpha = 0;

    this.timer = this.time.create(false);
    this.timer.add(3000, this.fadePictures, this);
    this.timer.start();

  }

  fadePictures () {

    //  Cross-fade the two pictures
    var tween: Phaser.Tween;

    if (this.pictureA.alpha === 1)
    {
        tween = this.add.tween(this.pictureA).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        this.add.tween(this.pictureB).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    }
    else
    {
        this.add.tween(this.pictureA).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween = this.add.tween(this.pictureB).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    }

    //  When the cross-fade is complete we swap the image being shown by the now hidden picture
    tween.onComplete.add(this.changePicture, this);

  }

  changePicture () {

    if (this.pictureA.alpha === 0)
    {
        this.pictureA.loadTexture('picture' + this.current);
    }
    else
    {
        this.pictureB.loadTexture('picture' + this.current);
    }

    this.current++;

    if (this.current > 7)
    {
        this.current = 1;
    }

    //  And set a new TimerEvent to occur after 3 seconds
    this.timer.add(3000, this.fadePictures, this);

  }

  render () {

    this.game.debug.text("Time until event: " + this.timer.duration.toFixed(0), 10, 20);

  }

}
