import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WorldSpriteState extends BootState {
  card: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('card', 'assets/sprites/mana_card.png');

  }

  create () {

    this.game.forceSingleUpdate = true;

    this.world.setBounds(0, 0, 1920, 1200);

    this.add.sprite(0, 0, 'backdrop');

    this.card = this.add.sprite(200, 200, 'card');
    this.card.anchor.set(0.5);

    this.physics.enable(this.card, Phaser.Physics.ARCADE);
    this.card.body.collideWorldBounds = true;

    this.camera.follow(this.card);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.card.body.velocity.x = 0;
    this.card.body.velocity.y = 0;

    if (this.cursors.left.isDown)
    {
        // card.x -= 4;
        this.card.body.velocity.x = -240;
    }
    else if (this.cursors.right.isDown)
    {
        // card.x += 4;
        this.card.body.velocity.x = 240;
    }

    if (this.cursors.up.isDown)
    {
        // card.y -= 4;
        this.card.body.velocity.y = -240;
    }
    else if (this.cursors.down.isDown)
    {
        // card.y += 4;
        this.card.body.velocity.y = 240;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 500, 32);
    this.game.debug.spriteCoords(this.card, 32, 32);

    this.game.debug.rectangle({x:400+this.camera.x,y:0+this.camera.y,width:1,height:600} as Phaser.Rectangle);
    this.game.debug.rectangle({x:0+this.camera.x,y:300+this.camera.y,width:800,height:1} as Phaser.Rectangle);

  }

}
