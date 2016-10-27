import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SubGroupsGroupLengthState extends BootState {
  friendAndFoe: Phaser.Group;

  enemies: Phaser.Group;
  normalBaddies: Phaser.Group;
  purpleBaddies: Phaser.Group;

  preload () {

    this.load.image('ufo', 'assets/sprites/ufo.png');
    this.load.image('baddie', 'assets/sprites/space-baddie.png');
    this.load.image('purple-baddie', 'assets/sprites/space-baddie-purple.png');

  }

  create () {

    // Create some local groups for later use.
    this.friendAndFoe = this.add.group();
    this.enemies = this.add.group();
    this.normalBaddies = this.add.group();
    this.purpleBaddies = this.add.group();


    this.enemies.add(this.normalBaddies);
    this.enemies.add(this.purpleBaddies);


    // Create a ufo as a friend sprite.
    this.friendAndFoe.create(200, 240, 'ufo');

    // Create some enemies.
    for (var i = 0; i < 16; i++)
    {
        this.createBaddie();
    }

    // Tap to create new baddie sprites.
    this.input.onTap.add(this.createBaddie, this);

  }

  createBaddie () {

    let baddie: Phaser.Sprite;

    // Of course, the baddies created will belong to their respective groups
    if (Math.random() > 0.5)
    {
        baddie = this.purpleBaddies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'purple-baddie');
    }
    else
    {
        baddie = this.normalBaddies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'baddie');
    }

  }

  render () {

    // 嵌套group只算作一个子元素的长度
    this.game.debug.text('Tap screen or click to create new baddies.', 16, 24);
    this.game.debug.text('enemies: ' + this.enemies.length + ' (actually ' + this.enemies.length + ' groups)', 16, 48);
    this.game.debug.text('normal baddies: ' + this.normalBaddies.length, 16, 60);
    this.game.debug.text('purple baddies: ' + this.purpleBaddies.length, 16, 72);
    this.game.debug.text('friends: ' + this.friendAndFoe.length, 16, 96);

  }

}
