/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Button: 'Button'
}

export class LoadEventsState extends BootState {
  button: Phaser.Button;
  text: Phaser.Text;
  x = 32;
  y = 80;

  preload () {

    this.load.spritesheet(AssetID.Button, '/assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';

    this.load.onLoadStart.add(this.onLoadStart, this
    );
    this.load.onFileComplete.add(this.onFileComplete, this);
    this.load.onLoadComplete.add(this.onLoadComplete, this);

    this.button = this.add.button(this.world.centerX - 95, this.world.centerY, AssetID.Button, this.onClickStartButton, this, 2, 1, 0);

    this.text = this.add.text(32, 32, 'Click to Start load', {fill: '#ffffff'});

  }

  onClickStartButton () {

    this.load.image('picture1', '/assets/pics/mighty_no_09_cover_art_by_robduenas.jpg');
    this.load.image('picture2', '/assets/pics/cougar_dragonsun.png');
    this.load.image('picture3', '/assets/pics/trsipic1_lazur.jpg');
    this.load.image('picture4', '/assets/pics/archmage_in_your_face.png');
    this.load.image('picture5', '/assets/pics/acryl_bladerunner.png');
    this.load.image('picture6', '/assets/pics/acryl_bobablast.png');
    this.load.image('picture7', '/assets/pics/alex-bisleys_horsy_5.png');

    this.load.start();
    this.button.visible = false;
  }

  onLoadStart () {

    this.text.setText('Loading...');

  }

  onFileComplete (progress: number, cacheKey: string, success: boolean, totalLoaded: number, totalFiles: number) {

    this.text.setText(`File Complete: ${progress} % - ${totalLoaded} out of ${totalFiles}`);

    let newImage = this.add.image(this.x, this.y, cacheKey);

    newImage.scale.set(0.3);

    this.x += newImage.width + 20;

    if (this.x > 700) {
      this.x = 32;
      this.y += 322;
    }


  }

  onLoadComplete () {

    this.text.setText('Load Complete');

  }

}
