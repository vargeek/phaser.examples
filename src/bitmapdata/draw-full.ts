import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DrawFullState extends BootState {

  preload () {

    this.load.image('bg', 'assets/pics/undersea.jpg');
    this.load.image('loop', 'assets/sprites/beball1.png');
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');


  }

  create () {

    let group = this.make.group();

    group.create(0, 0, 'bg');

    for (let index = 0; index < 16; index++) {
      group.create(this.world.randomX, this.world.randomY, 'loop');
    }

    let bmpText = this.make.bitmapText(32, 64, 'desyrel', 'Bitmap Text in the Group', 64);
    group.add(bmpText);

    let bmd = this.add.bitmapData(this.game.width, this.game.height);

    let bmdContainer = bmd.addToWorld(390, 290, 0, 0, 0.5, 0.5);
    // http://localhost:3000/Phaser.Stage.html#updateTransform
    // updateTransform()
    // Updates the transforms for all objects on the display list.
    // This overrides the Pixi default as we don't need the interactionManager, but do need the game property check.
    this.stage.updateTransform();

    // http://localhost:3000/Phaser.BitmapData.html#drawFull
    // drawFull(parent, blendMode, roundPx) → {Phaser.BitmapData}
    // Draws the Game Object or Group to this BitmapData and then recursively iterates through all of its children.
    // If a child has an exists property then it (and its children) will be only be drawn if exists is true.
    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData
    // they won't be drawn. Depending on your requirements you may need to resize the BitmapData in advance to match the
    // bounds of the top-level Game Object.
    // When drawing it will take into account the child's world rotation, scale and alpha values.
    // It's perfectly valid to pass in game.world as the parent object, and it will iterate through the entire display list.

    // Note: If you are trying to grab your entire game at the start of a State then you should ensure that at least 1 full update
    // has taken place before doing so, otherwise all of the objects will render with incorrect positions and scales. You can
    // trigger an update yourself by calling stage.updateTransform() before calling drawFull.
    bmd.drawFull(this.world);

  }

}
