import { BootState } from '../boot.state';
import { AssetID } from '../constant';

interface Rectangle extends Phaser.Rectangle {
  id: number,
  flagged: boolean;
}
export class QuadtreeState extends BootState {
  marker = new Phaser.Rectangle(0, 0, 128, 128);
  quadTree: Phaser.QuadTree;
  rects:Rectangle[] = [];

  create () {

    // http://localhost:3000/Phaser.QuadTree.html#random
    // new QuadTree(x, y, width, height, maxObjects, maxLevels, level)
    // maxObjects{number=10}      The maximum number of objects per node.
    // maxLevels{number=4}        The maximum number of levels to iterate to.
    // level{number=0}            Which level is this?
    // A QuadTree implementation. The original code was a conversion of the Java code posted to GameDevTuts.
    // However I've tweaked it massively to add node indexing, removed lots of temp. var creation and significantly increased performance as a result.
    // Original version at https://github.com/timohausmann/quadtree-js/
    this.quadTree = new Phaser.QuadTree(0, 0, 800, 600, 10, 4, 0)

    for (let index = 0; index < 48; index++) {
      let x = this.world.randomX;
      let y = this.world.randomY;
      if (x > 760) {
        x = 760;
      }
      if (y > 560) {
        y = 560;
      }

      let rect = new Phaser.Rectangle(x, y, 32, 32) as Rectangle;
      rect.id = index;
      rect.flagged = false;
      this.rects.push(rect);
      // http://localhost:3000/Phaser.QuadTree.html#insert
      // insert(body)
      // body{{x,y,right,bottom}}
      // Insert the object into the node. If the node exceeds the capacity, it will split and add all objects to their corresponding subnodes.
      this.quadTree.insert(rect);
    }

    this.input.onDown.add(this.retrive, this);

  }

  update () {

    this.marker.x = this.input.x;
    this.marker.y = this.input.y;

  }

  retrive () {

    for (let index = 0; index < this.rects.length; index++) {
      this.rects[index].flagged = false;
    }

    // http://localhost:3000/Phaser.QuadTree.html#retrieve
    // retrieve(source) → {array}
    // source{Phaser.Sprite|Phaser.Rectangle}
    // Return all objects that could collide with the given Sprite or Rectangle.
    let found = this.quadTree.retrieve(this.marker);

    for (let index = 0; index < found.length; index++) {
      (found[index] as Rectangle).flagged = true;
    }


  }

  render () {

    this.game.debug.quadTree(this.quadTree);
    for (let index = 0; index < this.rects.length; index++) {
      if (this.rects[index].flagged) {
        this.game.debug.geom(this.rects[index], '#f00');
      }
      else {
        this.game.debug.geom(this.rects[index]);
      }
      this.game.debug.text(this.rects[index].id.toString(), this.rects[index].x + 4, this.rects[index].y + 16);
    }

    this.game.debug.geom(this.marker, '#00bff3', false);

  }

}
