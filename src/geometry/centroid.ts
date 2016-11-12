import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CentroidState extends BootState {
  currentPoint: Phaser.Image;
  centroid: Phaser.Image;
  points: Phaser.Point[] = [];
  over = false;

  preload () {

    this.load.spritesheet('centroid', 'assets/sprites/centroid.png', 16, 16);

  }

  create () {

    this.currentPoint = this.add.image(10, 10, 'centroid');
    this.currentPoint.anchor.set(0.5);

    this.currentPoint.alpha = 0.5;

    this.centroid = this.add.image(10, 10, 'centroid', 1);
    this.centroid.anchor.set(0.5);
    this.centroid.visible = false;

    this.input.onTap.add(this.onTapHandler, this);


  }

  update () {

    this.currentPoint.position.copyFrom(this.input.activePointer.position);

    if (this.points.length > 0 ) {

      // http://localhost:3000/Phaser.Point.html
      // <static> centroid(points, out) → {Phaser.Point}
      // Calculates centroid (or midpoint) from an array of points. If only one point is provided, that point is returned.
      let c = Phaser.Point.centroid(this.points);
      this.centroid.position.copyFrom(c);

      if (!this.centroid.visible) {
        this.centroid.visible = true;
      }

    }

  }

  onTapHandler () {

    if (!this.over) {

      let img = this.add.sprite(this.input.activePointer.position.x, this.input.activePointer.position.y, 'centroid', 0);

      this.points.push(img.position);

      img.anchor.set(0.5);
      img.alpha = 0.25;
      img.inputEnabled = true;
      img.input.enableDrag(true);
      img.defaultCursor = 'move';

      img.events.onInputOver.add(()=>{
        img.alpha = 1;
        img.scale.set(1.2, 1.2);
        this.over = true;
      });

      img.events.onInputOut.add(()=>{
        img.alpha = 0.5;
        img.scale.set(1);
        this.over = false;
      })

    }


  }

  render () {

    this.world.forEachAlive((child: Phaser.Sprite)=>{
      this.game.debug.text(`${Phaser.Math.roundTo(child.x, 0)}, ${Phaser.Math.roundTo(child.y, 0)}`,child.x - 10, child.y + 25, '#ff1e00', '12px Courier');
    }, this);

    if (this.centroid.visible) {
      this.game.debug.text('Points may be dragged.', 10, 20);
      this.game.debug.text(`${Phaser.Math.roundTo(this.centroid.x, 0)}, ${Phaser.Math.roundTo(this.centroid.y, 0)}`, this.centroid.x - 10, this.centroid.y - 15, '#fff', 'bold 12px Courier');
    }
    else {
      this.game.debug.text('Click anywhere to add points.', 10, 20);
    }


  }

}
