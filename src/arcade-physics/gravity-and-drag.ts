import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GravityAndDragState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('ilkke', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  Set the world (global) gravity
    this.physics.arcade.gravity.y = 100;

    //  Sprite 1 will use the World (global) gravity
    this.sprite = this.add.sprite(100, 96, 'ilkke');

    this.physics.arcade.enable(this.sprite);

    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.velocity.x = 200;
    this.sprite.body.bounce.set(0.9);

    //  Also enable sprite for drag
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();

    // http://localhost:3000/Phaser.Events.html#onDragStart
    // onDragStart :Phaser.Signal

    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer starts to drag the Game Object, taking into consideration the various
    // drag limitations that may be set.
    // It is sent four arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The x coordinate that the drag started from.
    // {number} The y coordinate that the drag started from.
    this.sprite.events.onDragStart.add(this.startDrag, this);

    // http://localhost:3000/Phaser.Events.html#onDragStop
    // onDragStop :Phaser.Signal

    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer stops dragging the Game Object.
    // It is sent two arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    this.sprite.events.onDragStop.add(this.stopDrag, this);

    this.add.text(32, 32, 'Drag and release the sprite', { font: '16px Arial', fill: '#ffffff' });


  }

  startDrag () {

    //  You can't have a sprite being moved by physics AND input, so we disable the physics while being dragged
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#moves
    // 不要同时使用物理引擎和手动控制游戏对象的移动：使用Tween等方法手动移动游戏对象时关掉body.moves。
    // moves :boolean
    // If you have a Body that is being moved around the world via a tween or a Group motion, but its local x/y position never actually changes, then you should set Body.moves = false. Otherwise it will most likely fly off the screen.
    // If you want the physics system to move the body around, then set moves to true. Set to true to allow the Physics system to move this Body, otherwise false to move it manually.
    this.sprite.body.moves = false;

  }

  stopDrag () {

    this.sprite.body.moves = true;

  }

}
