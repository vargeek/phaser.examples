/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class ChangeFrameState extends BootState {
  greenJellyfish: Phaser.Sprite;

  preload () {

    this.load.atlas(AssetID.seacreatures, 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    this.load.image(AssetID.undersea, 'assets/pics/undersea.jpg');

  }

  create () {

    this.add.image(0, 0, AssetID.undersea);

    this.greenJellyfish = this.add.sprite(330, 100, AssetID.seacreatures, 'greenJellyfish0000');
    this.input.onDown.add(this.changeFrame, this);

  }

  changeFrame () {

    // Gets or sets the current frame name of the texture being used to render this Game Object.
    // To change the frame set frameName to the name of the new frame in the texture atlas you wish this Game Object to use,
    // for example: player.frameName = "idle".
    // If the frame name given doesn't exist it will revert to the first frame found in the texture and throw a console warning.
    // If you are using a sprite sheet then you should use the frame property instead.
    // If you wish to fully replace the texture being used see loadTexture.
    this.greenJellyfish.frameName = 'greenJellyfish0010';

  }

}
