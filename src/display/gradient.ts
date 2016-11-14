import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GradientState extends BootState {

  create () {

    this.stage.backgroundColor = '#0c9fc7';

    let out: string[] = [];
    let bmd = this.add.bitmapData(800, 600);
    bmd.addToWorld();

    let y = 0;
    for (let index = 0; index < 30; index++) {
      // http://localhost:3000/Phaser.Color.html#interpolateColor
      // <static> interpolateColor(color1, color2, steps, currentStep, alpha) → {number}
      // Interpolates the two given colours based on the supplied step and currentStep properties.
      let color = Phaser.Color.interpolateColor(0x66d973, 0x40b54d, 30, index);
      bmd.rect(0, y, 800, y + 2, Phaser.Color.getWebRGB(color));
      out.push(Phaser.Color.getWebRGB(color));
      y += 2;

    }

    for (let index = 0; index < 60; index++) {
      let color = Phaser.Color.interpolateColor(0x40b54d, 0x1d962b, 60, index);

      bmd.rect(0, y, 800, y + 2, Phaser.Color.getWebRGB(color));
      out.push(Phaser.Color.getWebRGB(color));
      y += 2;

    }

    console.log(JSON.stringify(out));

  }

}
