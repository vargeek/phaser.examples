import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignFramesToGridState extends BootState {

  preload () {

    this.load.atlas(AssetID.seacreatures, 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

  }

  create () {

    let group = this.add.group();

    // createMultiple(quantity, key, frame, exists) → {array}

    // Creates multiple Phaser.Sprite objects and adds them to the top of this Group.
    // This method is useful if you need to quickly generate a pool of sprites, such as bullets.
    // Use classType to change the type of object created.
    // You can provide an array as the key and / or frame arguments. When you do this
    // it will create quantity Sprites for every key (and frame) in the arrays.
    // By default the Sprites will have their exists property set to false, and they will be positioned at 0x0, relative to the Group.x / y values.

    // If Group.enableBody is set, then a physics body will be created on the objects, so long as one does not already exist.
    // If Group.inputEnableChildren is set, then an Input Handler will be created on the objects, so long as one does not already exist.

    // createMultiple(25, ['ball', 'carrot']) => 50 sprites
    // createMultiple(5, 'bricks', [0, 1, 2, 3]) => 20 sprites
    // createMultiple(20, ['diamonds', 'balls'], [0, 1, 2])  => 120 sprites
    group.createMultiple(5, AssetID.seacreatures, ['blueJellyfish0000', 'crab10000', 'flyingFish0000'], true);

    // align(width, height, cellWidth, cellHeight, position, offset) → {boolean}

    // This method iterates through all children in the Group (regardless if they are visible or exist)
    // and then changes their position so they are arranged in a Grid formation. Children must have
    // the alignTo method in order to be positioned by this call. All default Phaser Game Objects have
    // this.

    // The grid dimensions are determined by the first four arguments. The width and height arguments
    // relate to the width and height of the grid respectively.

    // Group.align(10, 10, 32, 32) => grid formation: 10 * 10, grid cell: 32 * 32
    // Group.align(-1, 8, 32, 32) => grid formation: n * 8 (n列，每列8个), grid cell: 32 * 32
    // Group.align(10, -1, 32, 32) => grid formation: 10 * n (n行，每行10个), grid cell: 32 * 32
    /**
     *               TOP_LEFT     TOP_CENTER     TOP_RIGHT
     * LEFT_TOP     |-------------------------------------| RIGHT_TOP
     *              |                                     |
     * LEFT_CENTER  |                                     | RIGHT_CENTER
     *              |                                     |
     * LEFT_BOTTOM  |                                     | RIGHT_BOTTOM
     *              |-------------------------------------|
     *              BOTTOM_LEFT   BOTTOM_CENTER  BOTTOM_RIGHT
     */
    group.align(5, 3, 160, 160, Phaser.CENTER);
    // group.align(5, -1, 160, 160, Phaser.CENTER);

  }

}
