import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BringAChildToTopState extends BootState {

  preload () {

    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('atari2', 'assets/sprites/atari800xl.png');
    this.load.image('atari4', 'assets/sprites/atari800.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('duck', 'assets/sprites/darkwing_crazy.png');
    this.load.image('firstaid', 'assets/sprites/firstaid.png');
    this.load.image('diamond', 'assets/sprites/diamond.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    let images = this.cache.getKeys(Phaser.Cache.IMAGE);

    for (let index = 0; index < images.length; index++) {

      let imgKey = this.rnd.pick(images);
      let sprite = this.add.sprite(this.world.randomX, this.world.randomY, imgKey);
      sprite.name = `${index}-${imgKey}`;

      sprite.inputEnabled = true;

      // http://localhost:3000/Phaser.InputHandler.html#enableDrag
      // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
      // Allow this Sprite to be dragged by any valid pointer.
      // bringToTop:
      // If true the Sprite will be bought to the top of the rendering list in its current Group.

      // events:
      // When the drag begins the Sprite.events.onDragStart event will be dispatched.
      // When the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.
      // For the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually
      // changes position and moves. The event sends 5 parameters: sprite, pointer, dragX, dragY and snapPoint.

      // thresholds:
      // You can control the thresholds over when a drag starts via the properties:
      // Pointer.dragDistanceThreshold the distance, in pixels, that the pointer has to move before the drag will start.
      // Pointer.dragTimeThreshold the time, in ms, that the pointer must be held down on
      // the Sprite before the drag will start.
      // You can set either (or both) of these properties after enabling a Sprite for drag.
      sprite.input.enableDrag(false, true);
      sprite.events.onInputDown.add((s:Phaser.Sprite)=>{
        console.log(`clicked ${s.name} ${s.renderOrderID}`);
      })

    }

  }

  render () {

    this.game.debug.inputInfo(32, 32);

  }

}
