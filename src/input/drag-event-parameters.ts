import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragEventParametersState extends BootState {
  result = 'Drag a sprite';

  preload () {

    this.load.image('grid', 'assets/tests/debug-grid-1920x1920.png');
    this.load.image('atari', 'assets/sprites/atari800xl.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');

  }

  create () {

    this.add.sprite(0, 0, 'grid');

    let group = this.add.group();

    // http://localhost:3000/Phaser.Group.html#inputEnableChildren
    // 输入使能(创建inputHandler)所有后面添加或创建的子元素。
    // A Group with inputEnableChildren set to true will automatically call inputEnabled = true
    // on any children added to, or created by, this Group.

    // If there are children already in the Group at the time you set this property, they are not changed.
    group.inputEnableChildren = true;

    let atari = group.create(32, 100, 'atari') as Phaser.Sprite;
    // inputEnableChildren 使所有添加到group的child自动使能input了。
    // atari.inputEnabled = true;
    atari.input.enableDrag();

    // http://localhost:3000/Phaser.Events.html#onDragStart
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer starts to drag the Game Object, taking into consideration the various drag limitations that may be set.

    // It is sent four arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The x coordinate that the drag started from.
    // {number} The y coordinate that the drag started from.
    atari.events.onDragStart.add(this.onDragStart, this);

    // http://localhost:3000/Phaser.Events.html#onDragStop
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer stops dragging the Game Object.

    // It is sent two arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    atari.events.onDragStop.add(this.onDragStop, this);

    let sonic = group.create(300, 200, 'sonic') as Phaser.Sprite;
    sonic.input.enableDrag();
    sonic.events.onDragStart.add(this.onDragStart, this);
    sonic.events.onDragStop.add(this.onDragStop, this);

    // http://localhost:3000/Phaser.Group.html#onChildInputDown
    // 子元素被点击就触发这个事件
    // This Signal is dispatched whenever a child of this Group emits an onInputDown signal as a result of having been interacted with by a Pointer. You can bind functions to this Signal instead of to  every child Sprite.

    // This Signal is sent 2 arguments:
    // {any} A reference to the Sprite that triggered the signal,
    // {Phaser.Pointer} and a reference to the Pointer that caused it.
    group.onChildInputDown.add(this.onDown, this);

  }

  onDragStart (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.result = `Dragging ${sprite.key}`;

  }

  onDragStop (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.result = `${sprite.key} dropped at x: ${pointer.x.toFixed(1)} y:${pointer.y.toFixed(1)}`;

    if (pointer.y > 400) {

      console.log(`input disabled on ${sprite.key}`);
      sprite.input.enabled = false;

      sprite.sendToBack();

    }

  }

  onDown (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.result = `Down ${sprite.key}`;
    console.log(`down ${sprite.key}`);

  }



  render () {

    this.game.debug.text(this.result, 10, 20);

  }

}
