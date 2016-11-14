import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureStarfieldState extends BootState {
  star: Phaser.Sprite;
  texture1: Phaser.RenderTexture;
  texture2: Phaser.RenderTexture;
  texture3: Phaser.RenderTexture;
  stars: {x:number, y:number,speed:number,texture:Phaser.RenderTexture}[] = [];

  preload () {

    this.load.image('star', 'assets/sprites/bullet.png');

  }

  create () {

    this.star = this.make.sprite(0, 0, 'star');

    this.texture1 = this.add.renderTexture(800, 600, 'texture1');
    this.texture2 = this.add.renderTexture(800, 600, 'texture2');
    this.texture3 = this.add.renderTexture(800, 600, 'texture3');

    this.add.sprite(0, 0, this.texture1);
    this.add.sprite(0, 0, this.texture2);
    this.add.sprite(0, 0, this.texture3);

    let texture = this.texture1;
    let speed = 4;

    for (let index = 0; index < 300; index++) {
      if (index === 100) {
        speed = 6;
        texture = this.texture2;
      }
      else if (index === 200) {
        speed = 7;
        texture = this.texture3;
      }
      this.stars.push({x: this.world.randomX, y: this.world.randomY, speed,texture})
    }


  }

  update () {

    for (let index = 0; index < 300; index++) {
      this.stars[index].y += this.stars[index].speed;

      if (this.stars[index].y > 600) {
        this.stars[index].x = this.world.randomX;
        this.stars[index].y = -32;
      }

      if (index === 0 || index === 100 || index === 200) {
        this.stars[index].texture.renderXY(this.star, this.stars[index].x, this.stars[index].y, true);
      }
      else {
        this.stars[index].texture.renderXY(this.star, this.stars[index].x, this.stars[index].y, false);
      }
    }

  }

}
