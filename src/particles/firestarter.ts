import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FirestarterState extends BootState {
  sprite: Phaser.Sprite;
  emitter: Phaser.Particles.Arcade.Emitter;
  path: Phaser.Sprite;
  index: number;

  preload () {

    this.load.image('space', 'assets/misc/starfield.jpg');
    this.load.image('fire1', 'assets/particles/fire1.png');
    this.load.image('fire2', 'assets/particles/fire2.png');
    this.load.image('fire3', 'assets/particles/fire3.png');
    this.load.image('smoke', 'assets/particles/smoke-puff.png');

    this.load.spritesheet('ball', 'assets/particles/plasmaball.png', 128, 128);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

    this.emitter = this.add.emitter(this.world.centerX, this.world.centerY, 400);

    this.emitter.makeParticles(['fire1', 'fire2', 'fire3', 'smoke']);

    this.emitter.gravity = 200;
    this.emitter.setAlpha(1, 0, 3000);
    this.emitter.setScale(0.8, 0, 0.8, 0, 3000);

    this.emitter.start(false, 3000, 5);

    this.sprite = this.add.sprite(0, 300, 'ball', 0);

    this.physics.arcade.enable(this.sprite);

    this.physics.arcade.gravity.y = 150;
    this.physics.arcade.checkCollision.left = false;
    this.physics.arcade.checkCollision.right = false;

    this.sprite.body.setSize(80, 80, 0, 0);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.set(1);
    this.sprite.body.velocity.set(300, 200);

    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    this.sprite.events.onDragStart.add(this.onDragStart, this);
    this.sprite.events.onDragStop.add(this.onDragStop, this);


    this.sprite.animations.add('pluse');
    this.sprite.play('pluse', 30, true);

    this.sprite.anchor.set(0.5);

    this.createText(16, 16, 'If you can catch the fireball, drag it around');

  }

  update () {

    let px = this.sprite.body.velocity.x;
    let py = this.sprite.body.velocity.y;

    px *= -1;
    py *= -1;

    this.emitter.minParticleSpeed.set(px, py);
    this.emitter.maxParticleSpeed.set(px, py);

    this.emitter.emitX = this.sprite.x;
    this.emitter.emitY = this.sprite.y;

    this.world.wrap(this.sprite, 64);

  }

  onDragStart () {

    this.sprite.body.moves = false;

  }

  onDragStop () {

    this.sprite.body.moves = true;

  }

  createText (x: number, y: number, content: string) {

    let text = this.add.text(x, y, content, undefined);

    text.font = 'Arial Black';
    text.fontSize = 20;
    text.fill = '#fff';
    text.setShadow(2, 2, 'rbga(0,0,0,0.7)', 2);

    return text;

  }

  render () {

    this.game.debug.bodyInfo(this.sprite, 32, 32);

  }



}
