import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GroupBoundsState extends BootState {
  group: Phaser.Group;

  preload () {

    this.load.image(AssetID.back, 'assets/pics/archmage_in_your_face.png');
    this.load.spritesheet(AssetID.diamond, 'assets/sprites/diamonds32x24x5.png', 32, 24);

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    let back = this.add.sprite(0, 0, AssetID.back);

    back.alignIn(this.world.bounds, Phaser.CENTER);

    this.group = this.add.group();

    this.group.create(0, 0, AssetID.diamond, 0);
    this.group.create(-200, -200, AssetID.diamond, 1);
    this.group.create(100, -200, AssetID.diamond, 2);
    this.group.create(100, 100, AssetID.diamond, 3);

    this.group.alignIn(back, Phaser.CENTER);

  }

  update () {

    this.group.rotation += 0.01;

  }

  render () {

    this.game.debug.geom(this.group.getBounds());
    this.game.debug.geom(this.group.position, '#ffff00');

  }

}
