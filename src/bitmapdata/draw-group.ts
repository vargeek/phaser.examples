import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DrawGroupState extends BootState {

  preload () {

    this.load.image('bg', 'assets/pics/undersea.jpg');
    this.load.image('disk', 'assets/sprites/copy-that-floppy.png');
    this.load.image('squad', 'assets/sprites/bsquadron3.png');
    this.load.image('loop', 'assets/sprites/beball1.png');
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    this.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');


  }

  create () {

    let group = this.make.group();

    group.create(0, 0, 'bg');

    for (let index = 0; index < 16; index++) {
      let sprite = group.create(this.world.randomX, this.world.randomY, 'loop') as Phaser.Sprite;

      if (index % 2 === 1) {
        sprite.tint = 0xff00ff;
      }
    }

    let bmpText = this.make.bitmapText(32, 64, 'desyrel', 'Bitmap Text in the Group', 64);
    bmpText.angle = 10;
    group.add(bmpText);

    let s = group.create(250, 300, 'disk') as Phaser.Sprite;
    let r = this.make.sprite(32, 16, 'squad') as Phaser.Sprite;

    r.angle = 45;
    s.scale.x = -1;
    s.angle = -20;

    let mummy = group.create(600, 4, 'mummy', 8) as Phaser.Sprite;
    mummy.scale.set(4);
    mummy.smoothed = false;

    let bot = group.create(60, 200, 'bot') as Phaser.Sprite;
    bot.scale.set(2);

    let bmd = this.add.bitmapData(this.game.width, this.game.height);

    let bmdContainer = bmd.addToWorld(390, 290, 0, 0, 0.5, 0.5);
    this.stage.updateTransform();

    // http://localhost:3000/Phaser.BitmapData.html#drawGroup
    // drawGroup(group, blendMode, roundPx) → {Phaser.BitmapData}

    // Draws the immediate children of a Phaser.Group to this BitmapData.

    // It's perfectly valid to pass in game.world as the Group, and it will iterate through the entire display list.

    // Children are drawn only if they have their exists property set to true, and have image, or RenderTexture, based Textures.

    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData they won't be visible.
    // When drawing it will take into account the rotation, scale, scaleMode, alpha and tint values.

    // Note: You should ensure that at least 1 full update has taken place before calling this,
    // otherwise the objects are likely to render incorrectly, if at all.
    // You can trigger an update yourself by calling stage.updateTransform() before calling drawGroup.
    bmd.drawGroup(this.world);

  }

}
