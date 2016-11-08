import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LoadPolygon3State extends BootState {
  contra: Phaser.Sprite;

  preload () {

    this.load.image('contra2', 'assets/pics/contra2.png');

  }

  create () {

    //	Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.contra = this.add.sprite(this.world.centerX, this.world.centerY - 200, 'contra2');

    //	Enable the physics body on this sprite and turn on the visual debugger
    this.physics.p2.enable(this.contra, true);

    this.contra.body.clearShapes();

    //	You can specify the addition of a new polygon to a body in 3 different ways:

    // http://localhost:3000/Phaser.Physics.P2.Body.html#addPolygon
    // addPolygon(options, points) → {boolean}
    // Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points. The shape must be simple and without holes.
    // This function expects the x.y values to be given in pixels. If you want to provide them at p2 world scales then call Body.data.fromPolygon directly.
    this.contra.body.addPolygon( {} , 10, 191  ,  26, 158  ,  25, 186  ,  13, 204  );

    // this.contra.body.addPolygon( {} , [   10, 191  ,  26, 158  ,  25, 186  ,  13, 204  ]);
    // this.contra.body.addPolygon( {} , [   [10, 191]  ,  [26, 158]  ,  [25, 186]  ,  [13, 204]  ]);

  }

}
