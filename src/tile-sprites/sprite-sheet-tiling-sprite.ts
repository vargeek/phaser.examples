/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class SpriteSheetTilingSpriteState extends BootState {
  sprite: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;
  count = 0;

  preload () {

    this.load.image(AssetID.starfield, 'assets/misc/starfield.jpg');
    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    this.load.atlas(AssetID.seacreatures, '/assets/sprites/seacreatures_json.png', '/assets/sprites/seacreatures_json.json');

  }

  create () {

    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.mummy);
    this.sprite.animations.add(Animation.walk);
    this.sprite.animations.play(Animation.walk, 20 ,true);

    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.seacreatures, 'octopus0002');
    this.sprite.animations.add(Animation.swim, Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    this.sprite.animations.play(Animation.swim);


    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.count += 0.005;

    this.sprite.tileScale.x = 2 + Math.sin(this.count);
    this.sprite.tileScale.y = 2 + Math.cos(this.count);

    if (this.cursors.left.isDown) {
      this.sprite.tilePosition.x += 4;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.tilePosition.x -= 4;
    }
    else if (this.cursors.up.isDown) {
      this.sprite.tilePosition.y += 4;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.tilePosition.y -= 4;
    }

  }

  render () {

    this.game.debug.text(this.sprite.frame.toString(), 32, 32);

  }

}
