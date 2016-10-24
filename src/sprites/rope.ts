/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RopeState extends BootState {
  rope: Phaser.Rope;
  shouldDebug = false;
  debugKey: Phaser.Key;
  preload () {

    this.load.image(AssetID.snake, '/assets/sprites/snake.png');

  }

  create () {

    let count = 0;
    let length = 918 / 20;
    let points: Phaser.Point[] = [];

    for (let index = 0; index < 20; index++) {
      points.push(new Phaser.Point(index * length, 0));
    }

    this.rope =  this.add.rope(32, this.world.centerY, AssetID.snake, null, points);
    this.rope.scale.set(0.8, 0.8);

    this.rope.updateAnimation = function () {
      count += 0.1;
      for (let index = 0; index < points.length; index++) {
        points[index].y = Math.sin(index * 0.5 + count) * 20;
      }

    }

    this.debugKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
    this.debugKey.onDown.add(this.toggleDebug, this);

  }

  render () {

    if (this.shouldDebug) {
      this.game.debug.ropeSegments(this.rope);
    }
    this.game.debug.text('(D) to show debug', 20, 32);

  }

  toggleDebug () {
    this.shouldDebug = !this.shouldDebug;
  }

}
