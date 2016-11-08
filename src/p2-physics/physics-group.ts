import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PhysicsGroupState extends BootState {

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {


    //  Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.stage.backgroundColor = '#124184';

    this.physics.p2.gravity.y = 100;
    this.physics.p2.restitution = 1.0;

    var group = this.add.physicsGroup(Phaser.Physics.P2JS);

    for (var i = 0; i < 32; i++)
    {
        var ball = group.create(this.world.randomX, this.rnd.between(0, 100), 'ball');
        ball.body.setCircle(16);
        ball.body.fixedRotation = true;
    }

  }

}
