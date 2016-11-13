import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpritesheetFromGraphicsState extends BootState {
  sprites: Phaser.Group;

  create () {
    let digitsData = [
        '0000    1 2222 3333',
        '0  0    1    2    3',
        '0  0    1 2222 3333',
        '0  0    1 2       3',
        '0000    1 2222 3333',
        '                   ',
        '4  4 5555 6666 7777',
        '4  4 5    6       7',
        '4444 5555 6666    7',
        '   4    5 6  6    7',
        '   4 5555 6666    7',
        '                   ',
        '8888 9999          ',
        '8  8 9  9          ',
        '8888 9999          ',
        '8  8    9          ',
        '8888 9999          '];

    let pixelSize = 8;
    let x = 0;
    let y =0;

    let g = this.add.graphics(0, 0);

    g.beginFill(0x00fff00);
    digitsData.forEach((line: string) => {

      for (let index = 0; index < line.length; index++) {
        if (line[index] !== ' ') {
          g.drawRect(x, y, pixelSize, pixelSize);
        }
        x += pixelSize;
      }
      x = 0;
      y += pixelSize;

    });
    g.endFill();

    let texture = g.generateTexture();
    g.alpha = 0.5;

    let frameWidth = pixelSize * 4;
    let frameHeight = pixelSize * 5;

    let frameMax = 10;
    let margin = 0;
    let spacing = pixelSize;

    this.cache.addSpriteSheet('digits', null, texture.baseTexture.source, frameWidth, frameHeight, frameMax, margin, spacing);

    this.sprites = this.add.physicsGroup(Phaser.Physics.ARCADE);

    for (let index = 0; index < 30; index++) {
      let sprite = this.sprites.create(this.world.randomX, this.world.randomY, 'digits', this.rnd.between(0, 10)) as Phaser.Sprite;
      sprite.animations.add('spin', Phaser.ArrayUtils.numberArray(0, 9));

      sprite.play('spin', this.rnd.between(2, 6), true);

      sprite.body.velocity.set(this.rnd.between(-200, 200), this.rnd.between(-200, 200));
      sprite.body.collideWorldBounds = true;
      sprite.body.bounce.set(1);
    }

  }

  update () {

    this.physics.arcade.collide(this.sprites);

  }

}
