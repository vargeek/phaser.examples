import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MultipleTimersState extends BootState {

  preload () {

    this.load.image('picture1', 'assets/pics/cougar_sanity_train.png');
    this.load.image('picture2', 'assets/pics/cougar-face_of_nature.png');
    this.load.image('picture3', 'assets/pics/destop-rewarding.png');
    this.load.image('picture4', 'assets/pics/unknown-the_starwars_pic.png');

  }

  create () {

    let pic1 = this.add.sprite(0, 200, 'picture1');
    let pic2 = this.add.sprite(200, 200, 'picture2');
    let pic3 = this.add.sprite(400, 200, 'picture3');
    let pic4 = this.add.sprite(600, 200, 'picture4');

    let pics = [pic1, pic2, pic3, pic4];

    for (let index = 0; index < pics.length; index++) {
      let pic = pics[index];
      pic.scale.set(0.5);
      pic.visible = false;

      this.time.events.add(1000 + index * 500, this.showPicture, this, pic);

    }

  }

  showPicture (pic: Phaser.Sprite) {

    if (pic.y === 200) {
      pic.y = 400;
    }
    else {
      pic.y = 200;
    }
    pic.visible = true;
    this.time.events.add(2000, this.removePicture, this, pic);

  }

  removePicture (pic: Phaser.Sprite) {

    pic.visible = false;
    this.time.events.add(2000, this.showPicture, this, pic);

  }

}
