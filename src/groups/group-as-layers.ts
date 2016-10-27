import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GroupAsLayersState extends BootState {

  preload () {
    this.world.setBounds(0, 0, 1280, 800);
    this.load.image('ground', 'assets/tests/ground-2x.png');
    this.load.image('river', 'assets/tests/river-2x.png');
    this.load.image('sky', 'assets/tests/sky-2x.png');
    this.load.image('cloud0', 'assets/tests/cloud-big-2x.png');
    this.load.image('cloud1', 'assets/tests/cloud-narrow-2x.png');
    this.load.image('cloud2', 'assets/tests/cloud-small-2x.png');

    this.load.spritesheet('ufo', 'assets/sprites/ufo.png', 24, 21);

  }

  create () {

    let skyLayer = this.add.group();
    let cloudLayer = this.add.group();
    let groundLayer = this.add.group();
    let spriteLayer = this.add.group();
    let riverLayer = this.add.group();

    let sky = skyLayer.create(0, 0, 'sky');

    let cloud0 = cloudLayer.create(200, 120, 'cloud0');
    let cloud1 = cloudLayer.create(-60, 120, 'cloud1');
    let cloud2 = cloudLayer.create(900, 170, 'cloud2');

    let ground = groundLayer.create(0, 360, 'ground');

    let river = riverLayer.create(0, 400, 'river');

    let ufo = spriteLayer.create(360, 240, 'ufo') as Phaser.Sprite;
    ufo.anchor.setTo(0.5);

  }

  render () {

    this.game.debug.text('sky layer:    z = 0', 16, 20);
    this.game.debug.text('cloud layer:  z = 1', 16, 36);
    this.game.debug.text('ground layer: z = 2', 16, 52);
    this.game.debug.text('sprite layer: z = 3', 16, 68);
    this.game.debug.text('river layer:  z = 4', 16, 84);

  }

}
