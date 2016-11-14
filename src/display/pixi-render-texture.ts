import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixiRenderTextureState extends BootState {
  renderTexture: Phaser.RenderTexture;
  renderTexture2: Phaser.RenderTexture;
  currentTexture: Phaser.RenderTexture;
  outputSprite: Phaser.Sprite;
  stuffContainer: Phaser.Group;
  count = 0;

  preload () {

    this.load.image('spin1', 'assets/sprites/spinObj_01.png');
    this.load.image('spin2', 'assets/sprites/spinObj_02.png');
    this.load.image('spin3', 'assets/sprites/spinObj_03.png');
    this.load.image('spin4', 'assets/sprites/spinObj_04.png');
    this.load.image('spin5', 'assets/sprites/spinObj_05.png');
    this.load.image('spin6', 'assets/sprites/spinObj_06.png');
    this.load.image('spin7', 'assets/sprites/spinObj_07.png');
    this.load.image('spin8', 'assets/sprites/spinObj_08.png');

  }

  create () {

    this.renderTexture = this.add.renderTexture(800, 600, 'texture1');
    this.renderTexture2 = this.add.renderTexture(800, 600, 'texture2');
    this.currentTexture = this.renderTexture;

    this.outputSprite = this.add.sprite(400, 300, this.currentTexture);

    this.outputSprite.anchor.set(0.5);

    this.stuffContainer = this.add.group();
    this.stuffContainer.x = 800 / 2;
    this.stuffContainer.y = 600 / 2;

    for (let index = 0; index < 20; index++) {
      let item = this.stuffContainer.create(Math.random() * 400 - 200, Math.random() * 400 - 200, this.rnd.pick(this.cache.getKeys(Phaser.Cache.IMAGE))) as Phaser.Image;
      item.anchor.set(0.5);
    }

  }

  update () {

    this.stuffContainer.addAll('rotation', 0.1, true, true);
    this.count += 0.01;

    let temp = this.renderTexture;
    this.renderTexture = this.renderTexture2;
    this.renderTexture2 = temp;

    this.outputSprite.setTexture(this.renderTexture);

    this.stuffContainer.rotation -= 0.01;
    this.outputSprite.scale.x = this.outputSprite.scale.y = 1 + Math.sin(this.count) * 0.2;

    // render the stage to the texture
	  // the true clears the texture before content is rendered
    this.renderTexture2.renderXY(this.game.stage, 0, 0, true);

  }

}
