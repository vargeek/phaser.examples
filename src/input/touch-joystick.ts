/// <reference path="../game-controller.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />


import { BootState } from '../boot.state';
import { AssetID } from '../constant';
import { GameController } from 'game-controller';
import * as $ from 'jquery';

(window as any).GameController = GameController;

type Body = Phaser.Physics.Arcade.Body;

export class TouchJoystickState extends BootState {
  ufo: Phaser.Sprite;
  ufoSpeed = 200;
  joystickLeft: GameController.MoveDetails;

  preload () {

    this.world.setBounds(0, 0, 800, 600);
    this.load.image('ufo', 'assets/sprites/ufo.png');

  }

  create () {

    this.ufo = this.add.sprite(320, 240, 'ufo');
    this.ufo.anchor.setTo(0.5);

    this.physics.enable(this.ufo, Phaser.Physics.ARCADE);

    GameController.init({
      left: {
        type: 'joystick',
        joystick: {
          touchStart () {

          },
          touchMove: (joystick)=> {
            console.log('xxx');
            this.joystickLeft = joystick;

          },
          touchEnd: () => {
            this.joystickLeft = null;
          }
        }
      },
      right: {
        type: 'none'
      }
    });

    $('canvas').last().css('z-index', 20);
    $('canvas').last().offset($('canvas').first().offset());

  }

  update () {

    let body = this.ufo.body as Body;

    if (this.joystickLeft) {
      body.velocity.setTo(this.joystickLeft.normalizedX * 200, this.joystickLeft.normalizedY * this.ufoSpeed * -1);

    }
    else {
      body.velocity.setTo(0, 0);
    }

  }

  render () {

    this.game.debug.text('Use the virtual joystick to move the UFO.', 20, 20);
    this.game.debug.text('This requires touch events, so try on your phone.', 20, 40);

  }

}
