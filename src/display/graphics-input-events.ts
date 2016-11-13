import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GraphicsInputEventsState extends BootState {
  graphics: Phaser.Graphics;

  create () {

    this.graphics = this.add.graphics(300, 200);

    this.drawShape(0x027a71, 0x2fdeb);


    this.graphics.inputEnabled = true;
    this.graphics.input.useHandCursor = true;

    // http://localhost:3000/Phaser.Graphics.html#events
    // events :Phaser.Events
    // All Phaser Game Objects have an Events class which contains all of the events that are dispatched when certain things happen to this
    // Game Object, or any of its components.
    this.graphics.events.onInputDown.add(this.onInputDown, this);
    this.graphics.events.onInputUp.add(this.onInputUp, this);
    this.graphics.events.onInputOver.add(this.onInputOver, this);
    this.graphics.events.onInputOut.add(this.onInputOut, this);

  }

  drawShape (fill: number, lineStyle:number) {

    this.graphics.clear();

    this.graphics.beginFill(fill);
    this.graphics.lineStyle(4, lineStyle, 1);

    this.graphics.moveTo(0, 0);
    this.graphics.lineTo(250, 0);
    this.graphics.lineTo(250, 200);
    this.graphics.lineTo(125, 100);
    this.graphics.lineTo(0, 200);
    this.graphics.lineTo(0, 0);

    this.graphics.endFill();

  }

  onInputDown () {

    this.drawShape(0x717a02, 0xebfd02);

  }

  onInputUp () {

    this.drawShape(0x027a71, 0x02fdeb);

  }

  onInputOver () {

    this.drawShape(0xab3602, 0xeb6702);

  }

  onInputOut () {

    this.drawShape(0x027a71, 0x02fdeb);

  }

}
