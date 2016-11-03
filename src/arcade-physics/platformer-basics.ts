import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PlatformerBasicsState extends BootState {
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  jumpButton: Phaser.Key;
  bg: Phaser.TileSprite;
  facing = 'left';
  jumpTimer = 0;


  preload () {

    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);
    this.load.image('background', 'assets/games/starstruck/background2.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    // http://localhost:3000/Phaser.Time.html#desiredFps
    // desiredFps :integer
    // The desired frame rate of the game.

    // This is used is used to calculate the physic / logic multiplier and how to apply catch-up logic updates. The desired frame rate of the game. Defaults to 60.
    this.time.desiredFps = 30;

    this.bg = this.add.tileSprite(0, 0, 800, 600, 'background');

    this.physics.arcade.gravity.y = 250;

    this.player = this.add.sprite(32, 32, 'dude');
    this.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.bounce.y = 0.2;
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(20, 32, 5, 16);

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  }

  update () {

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();

            if (this.facing == 'left')
            {
                this.player.frame = 0;
            }
            else
            {
                this.player.frame = 5;
            }

            this.facing = 'idle';
        }
    }

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onFloor
    // onFloor() → {boolean}
    // Returns true if the bottom of this Body is in contact with either the world bounds or a tile.
    if (this.jumpButton.isDown && this.player.body.onFloor() && this.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -250;
        this.jumpTimer = this.time.now + 750;
    }


  }

  render () {

    // http://localhost:3000/Phaser.Time.html#suggestedFps
    // suggestedFps :number
    // The suggested frame rate for your game, based on an averaged real frame rate.
    // This value is only populated if Time.advancedTiming is enabled.

    // Note: This is not available until after a few frames have passed; until then
    // it's set to the same value as desiredFps.
    this.game.debug.text(this.time.suggestedFps.toString(), 32, 32);
    // http://localhost:3000/Phaser.Time.html#physicsElapsed
    // physicsElapsed :number
    // The physics update delta, in fractional seconds.
    // This should be used as an applicable multiplier by all logic update steps (eg. preUpdate/postUpdate/update)
    // to ensure consistent game timing. Game/logic timing can drift from real-world time if the system
    // is unable to consistently maintain the desired FPS.
    // With fixed-step updates this is normally equivalent to 1.0 / desiredFps.
    this.game.debug.text(this.time.physicsElapsed.toString(), 32, 64);

  }

}
