/// <reference path="../phaser.d.ts" />

import { BootState, IBootInfo } from '../boot.state';

const AssetID = {
  Arrow: 'Arrow'
}

export class SpriteRotationState extends BootState {
  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.AUTO,
    bounds: {
      width: 800,
      height: 600
    }
  }

  math: typeof Phaser.Math;

  arrow: Phaser.Sprite;
  graphics: Phaser.Graphics;

  preload () {

    this.load.image(AssetID.Arrow, '/assets/sprites/longarrow-white.png');

  }

  create () {

    this.stage.backgroundColor = '#000000';

    const labelStyle = {
      font: '16px courier',
      fill: '#00ff00',
      align: 'center'
    }

    const circle = new Phaser.Circle(this.world.centerX, this.world.centerY, 450);
    const labelCircle = new Phaser.Circle(this.world.centerX, this.world.centerY, 530);

    this.graphics = this.add.graphics(0, 0);
    this.graphics.lineStyle(2, 0x00ff00, 1);
    this.graphics.drawCircle(circle.x, circle.y, circle.diameter);

    for (let angle = 0; angle < 360; angle+=22.5) {

      this.graphics.moveTo(this.world.centerX, this.world.centerY);
      let p = circle.circumferencePoint(angle, true);
      this.graphics.lineTo(p.x, p.y);

      let lp = labelCircle.circumferencePoint(angle, true);
      let na = angle;
      if (na > 180) {
        na -= 360;
      }
      let rads = String(this.math.degToRad(na)).substr(0, 5);
      let info = `${na} °\n${rads}`;

      let label = this.add.text(lp.x, lp.y, info, labelStyle);
      label.centerX = lp.x;
      label.centerY = lp.y;

    }

    this.arrow = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.Arrow);
    this.arrow.scale.set(0.8);
    this.arrow.anchor.set(0.5);
    this.arrow.tint = 0xff0000;

  }

  update () {
    this.arrow.angle += 0.2;
  }

  render () {
    this.game.debug.text('Sprite Rotation', 24, 32);
    this.game.debug.text(`Angle ${this.arrow.angle.toFixed(2)}`, 24, 64);
    this.game.debug.text(`Rotation: ${this.arrow.rotation.toFixed(2)}`, 24, 96);
  }

}
