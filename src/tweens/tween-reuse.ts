import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenReuseState extends BootState {
  sprites: Phaser.Group;
  tween: Phaser.Tween;

  preload () {

    this.load.image(AssetID.beball, 'assets/sprites/beball1.png');
    this.load.image(AssetID.bikkuriman, 'assets/sprites/bikkuriman.png');
    this.load.image(AssetID.darkwing_crazy, 'assets/sprites/darkwing_crazy.png');

  }

  create () {

    this.stage.backgroundColor = 0x2384e7;

    this.sprites = this.add.group();

    this.sprites.create(100, 100, AssetID.beball);
    this.sprites.create(200, 100, AssetID.bikkuriman);
    this.sprites.create(300, 100, AssetID.darkwing_crazy);
    this.sprites.create(400, 100, AssetID.beball);
    this.sprites.create(500, 100, AssetID.bikkuriman);
    this.sprites.create(600, 100, AssetID.darkwing_crazy);

    // this.sprites.cursor
    // The current display object that the group cursor is pointing to, if any. (Can be set manually.)

    // The cursor is a way to iterate through the children in a Group using next and previous.

    this.tween = this.add.tween(this.sprites.cursor).to({y: 500}, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.add(this.tween2, this);

  }


  tween2 () {

    // Advances the group cursor to the next (higher) object in the group.
    // If the cursor is at the end of the group (top child) it is moved the start of the group (bottom child).
    this.sprites.next();

    //  The second tween alphs to nothing
    this.tween = this.add.tween(this.sprites.cursor).to( { alpha: 0 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.add(this.tween3, this);

  }

  tween3 () {

    this.sprites.next();

    //  The third tween scales up
    this.tween = this.add.tween(this.sprites.cursor.scale).to( { x: 2, y: 2 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.add(this.tween4, this);

  }

  tween4 () {

    this.sprites.next();

    //  The fourth tween does y pos + alpha
    this.tween = this.add.tween(this.sprites.cursor).to( { y: 500, alpha: 0.2 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.add(this.tween5, this);

  }

  tween5 () {

    this.sprites.next();

    //  The fifth tween moves left
    this.tween = this.add.tween(this.sprites.cursor).to( { x: 100 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.add(this.tween6, this);

  }

  tween6 () {

    this.sprites.next();

    //  The sixth tween moves left
    this.tween = this.add.tween(this.sprites.cursor).to( { x: 300, y: 400 }, 2000, Phaser.Easing.Bounce.Out, true);

  }


}
