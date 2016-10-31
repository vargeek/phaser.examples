import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixelpickScrollingEffectState extends BootState {
  stars: Phaser.TileSprite;
  mummy: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  camSpeed = 4;

  preload () {

    this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    this.load.image('stars', 'assets/misc/starfield.jpg');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.world.setBounds(0, 0, 4000, 2000);

    this.stars = this.add.tileSprite(0, 0, 4000, 600, 'stars');

    this.mummy = this.add.sprite(0, 300, 'mummy');

    this.physics.arcade.enable(this.mummy);

    this.mummy.scale.set(6);
    this.mummy.smoothed = false;

    this.mummy.animations.add('walk');
    this.mummy.animations.play('walk', 5, true);

    (this.mummy.body as Phaser.Physics.Arcade.Body).velocity.setTo(50, 0);

    this.mummy.inputEnabled = true;
    this.mummy.input.pixelPerfectClick = true;
    this.mummy.events.onInputDown.add(this.tint, this);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.camera.x -= this.camSpeed;
      if (!this.camera.atLimit.x) {
        this.stars.tilePosition.x += this.camSpeed;
      }
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += this.camSpeed;
      if (!this.camera.atLimit.x) {
        this.stars.tilePosition.x -= this.camSpeed;
      }
    }
    else if (this.cursors.up.isDown) {
      if (this.camera.y -= this.camSpeed) {
        if (!this.camera.atLimit.y) {
          this.stars.tilePosition.y += this.camSpeed;
        }
      }
    }
    else if (this.cursors.down.isDown) {
      if (this.camera.y += this.camSpeed) {
        if (!this.camera.atLimit.y) {
          this.stars.tilePosition.y -= this.camSpeed;
        }
      }
    }

  }

  tint () {

    this.mummy.tint = Math.random() * 0xffffff;

  }

  render () {

    this.game.debug.spriteInputInfo(this.mummy, 32, 32);
    this.game.debug.cameraInfo(this.camera, 500, 32);

  }

}
