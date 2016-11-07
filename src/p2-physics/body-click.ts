import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BodyClickState extends BootState {
  contra: Phaser.Sprite;
  bunny: Phaser.Sprite;
  block: Phaser.Sprite;
  wizball: Phaser.Sprite;
  result = 'Click a body';

  preload () {

	this.load.image('contra2', 'assets/pics/contra2.png');
	this.load.image('bunny', 'assets/sprites/bunny.png');
	this.load.image('block', 'assets/sprites/block.png');
	this.load.image('wizball', 'assets/sprites/wizball.png');

  // http://localhost:3000/Phaser.Loader.html#physics
  // Adds a physics data file to the current load queue.
  // The data must be in Lime + Corona JSON format. Physics Editor by code'n'web exports in this format natively.

  // You can choose to either load the data externally, by providing a URL to a json file.
  // Or you can pass in a JSON object or String via the data parameter.
  // If you pass a String the data is automatically run through JSON.parse and then immediately added to the Phaser.Cache.

  // If a URL is provided the file is not loaded immediately after calling this method, but is added to the load queue.

  // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

  // Retrieve the file via Cache.getJSON(key). JSON files are automatically parsed upon load.
  // If you need to control when the JSON is parsed then use Loader.text instead and parse the text file as needed.

  // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

  // If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
  // For example if the key is "alien" and no URL or data is given then the Loader will set the URL to be "alien.json".
  // It will always use .json as the extension.
	this.load.physics('physicsData', 'assets/physics/sprites.json');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.contra = this.add.sprite(100, 200, 'contra2');
    this.bunny = this.add.sprite(550, 200, 'bunny');
    this.block = this.add.sprite(300, 400, 'block');
    this.wizball = this.add.sprite(500, 500, 'wizball');

    //	Enable the physics bodies on all the sprites and turn on the visual debugger
    this.physics.p2.enable([ this.contra, this.bunny, this.block, this.wizball ], true);

    // http://localhost:3000/Phaser.Physics.P2.Body.html#clearShapes
    // clearShapes()
    // Removes all Shapes from this Body.
    this.contra.body.clearShapes();
    // http://localhost:3000/Phaser.Physics.P2.Body.html#loadPolygon
    // loadPolygon(key, object) → {boolean}
    // key{string}    The key of the Physics Data file as stored in Game.Cache. Alternatively set to null and pass the data as the 2nd argument.
    // object{string|object}    The key of the object within the Physics data file that you wish to load the shape data from, or if key is null pass the actual physics data object itself as this parameter.

    // Reads the shape data from a physics data file stored in the Game.Cache and adds it as a polygon to this Body.
    // As well as reading the data from the Cache you can also pass null as the first argument and a physics data object as the second.
    // When doing this you must ensure the structure of the object is correct in advance.
    // For more details see the format of the Lime / Corona Physics Editor export.
    this.contra.body.loadPolygon('physicsData', 'contra2');

    this.bunny.body.clearShapes();
    this.bunny.body.loadPolygon('physicsData', 'bunny');

    // http://localhost:3000/Phaser.Physics.P2.Body.html#setCircle
    // setCircle(radius, offsetX, offsetY, rotation)
    // Clears any previously set shapes. Then creates a new Circle shape and adds it to this Body.
    // If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
    this.wizball.body.setCircle(45);

    this.input.onDown.add(this.click, this);

  }

  click (pointer: Phaser.Pointer) {

    // http://localhost:3000/Phaser.Physics.P2.html#hitTest
    // hitTest(worldPoint, bodies, precision, filterStatic) → {Array}
    // precision{number=5}          Used for matching against particles and lines. Adds some margin to these infinitesimal objects.
    // filterStatic{number=false}   If true all Static objects will be removed from the results array.

    // Test if a world point overlaps bodies. You will get an array of actual P2 bodies back.
    // You can find out which Sprite a Body belongs to (if any) by checking the Body.parent.sprite property.
    // Body.parent is a Phaser.Physics.P2.Body property.
    let bodies:any[] = this.physics.p2.hitTest(pointer.position, [this.contra, this.bunny, this.block, this.wizball]);

    if (bodies.length === 0) {
      this.result = "You didn't click a Body";
    }
    else {

      this.result = 'You clicked: ';

      for (let index = 0; index < bodies.length; index++) {
        this.result = this.result + bodies[index].parent.sprite.key;

        if (index < bodies.length - 1) {
          this.result = this.result + ', ';
        }

      }

    }

  }

  update () {

    this.bunny.body.rotateLeft(2);

  }

  render () {

    this.game.debug.text(this.result, 32, 32);

  }

}
