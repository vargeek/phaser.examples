# rotate-point
  - new Phaser.Point>
    ```js
    // http://localhost:3000/Phaser.Point.html
    // new Point(x, y)

    // A Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
    // The following code creates a point at (0,0):
    // var myPoint = new Phaser.Point();
    // You can also use them as 2D Vectors and you'll find different vector related methods in this class.
    this.p1 = new Phaser.Point(300, 300);

    ```
  - point.rotate>
    ```js
    // http://localhost:3000/Phaser.Point.html#rotate
    // rotate(x, y, angle, asDegrees, distance) → {Phaser.Point}
    // asDegrees{boolean=false}   Is the given angle in radians (false) or degrees (true)?
    // distance{number?}          An optional distance constraint between the Point and the anchor. 旋转点到锚点距离不能大于distance
    // Rotates this Point around the x/y coordinates given to the desired angle.
    this.p1.rotate(this.p2.x, this.p2.y, 1, true);

    ```
# playing-with-points
  - new Phaser.Point
  - point.rotate
# centroid
  - Point.centroid>
    ```js
    // http://localhost:3000/Phaser.Point.html
    // <static> centroid(points, out) → {Phaser.Point}
    // Calculates centroid (or midpoint) from an array of points. If only one point is provided, that point is returned.
    let c = Phaser.Point.centroid(this.points);

    ```
# line
  - new Phaser.Line>
    ```js
    // http://localhost:3000/Phaser.Line.html
    // new Line(x1, y1, x2, y2)
    // Creates a new Line object with a start and an end point.
    this.line1 = new Phaser.Line(this.handle1.x, this.handle1.y, this.handle2.x, this.handle2.y);

    ```
  - line.fromSprite>
    ```js
    // http://localhost:3000/Phaser.Line.html#fromSprite
    // fromSprite(startSprite, endSprite, useCenter) → {Phaser.Line}
    // useCenter{boolean=false}     If true it will use startSprite.center.x, if false startSprite.x. Note that Sprites don't have a center property by default, so only enable if you've over-ridden your Sprite with a custom class.

    // Sets the line to match the x/y coordinates of the two given sprites.
    // Can optionally be calculated from their center coordinates.
    this.line1.fromSprite(this.handle1, this.handle2, false);

    ```
# line-midpoint
  - line.midPoint>
    ```js
    // http://localhost:3000/Phaser.Line.html#midPoint
    // midPoint(out) → {Phaser.Point}
    // out{Phaser.Point?}     A Phaser.Point object into which the result will be populated. If not given a new Point object is created.
    // Returns a Point object where the x and y values correspond to the center (or midpoint) of the Line segment.
    this.line.midPoint(this.midpoint);
    ```
# rotate-line
  - line.rotate>
    ```js
    // http://localhost:3000/Phaser.Line.html#rotate
    // rotate(angle, asDegrees) → {Phaser.Line}
    // Rotates the line by the amount specified in angle.
    // Rotation takes place from the center of the line.
    // If you wish to rotate around a different point see Line.rotateAround.
    // If you wish to rotate the ends of the Line then see Line.start.rotate or Line.end.rotate.
    this.line.rotate(1, true);

    ```
  - line.rotateAround>
    ```js
    // http://localhost:3000/Phaser.Line.html#rotateAround
    // rotateAround(x, y, angle, asDegrees) → {Phaser.Line}
    // Rotates the line by the amount specified in angle.
    // Rotation takes place around the coordinates given.
    ```
# line-intersection
  - line.intersects>
    ```js
    // http://localhost:3000/Phaser.Line.html#intersects
    // intersects(line, asSegment, result) → {Phaser.Point}
    // asSegment{boolean=true}        直线或线段
    // Checks for intersection between this line and another Line.
    // If asSegment is true it will check for segment intersection. If asSegment is false it will check for line intersection.
    // Returns the intersection segment of AB and EF as a Point, or null if there is no intersection.
    this.intersection = this.line1.intersects(this.line2, true);

    ```
# line-reflection
  - line.normalAngle 法线的角度>
    ```js
    // 法线
    // http://localhost:3000/Phaser.Line.html#normalAngle
    // Gets the angle in radians of the normal of this line (line.angle - 90 degrees.)
    this.normal.fromAngle(this.point.x, this.point.y, this.line2.normalAngle, 100);
    ```
  - line.fromAngle>
    ```js
    // http://localhost:3000/Phaser.Line.html#fromAngle
    // fromAngle(x, y, angle, length) → {Phaser.Line}
    // Sets this line to start at the given x and y coordinates and for the segment to extend at angle for the given length.
    this.normal.fromAngle(this.point.x, this.point.y, this.line2.normalAngle, 100);
    ```
  - line.reflect 反射线角度>
    ```js
    // http://localhost:3000/Phaser.Line.html#reflect
    // reflect(line) → {number}
    // Returns the reflected angle between two lines.
    // This is the outgoing angle based on the angle of this line and the normalAngle of the given line.
    let outgoing = this.line1.reflect(this.line2);

    ```
  - line.angle 弧度制角度>
    ```js
    // http://localhost:3000/Phaser.Line.html#angle
    // <readonly> angle :number
    // Gets the angle of the line in radians.
    this.arrow.rotation = this.reflection.angle;

    ```
# line-bounds
  - debug.rectangle(line)
# line-random-point
  - Phaser.Color.HSVColorWheel>
    ```js
    // http://localhost:3000/Phaser.Color.html#HSVColorWheel
    // <static> HSVColorWheel(s, v) → {array}
    // Get HSV color wheel values in an array which will be 360 elements in size.
    colors = Phaser.Color.HSVColorWheel();

    ```
  - line.random>
    ```js
    // http://localhost:3000/Phaser.Line.html#random
    // random(out) → {Phaser.Point}
    // Picks a random point from anywhere on the Line segment and returns it.
    this.lines[color].random(this.point);

    ```
  - point.floor>
    ```js
    // http://localhost:3000/Phaser.Point.html#floor
    // floor() → {Phaser.Point}
    // Math.floor() both the x and y properties of this Point.
    this.point.floor();

    ```
  - math.wrapValue>
    ```js
    // http://localhost:3000/Phaser.Math.html#wrapValue
    // wrapValue(value, amount, max) → {number}
    // Adds value to amount and ensures that the result always stays between 0 and max, by wrapping the value around.
    // Values must be positive integers, and are passed through Math.abs. See Phaser.Math#wrap for an alternative.
    this.index = this.math.wrapValue(this.index, 1, 359);

    ```
# center-line
  - line.centerOn>
    ```js
    // http://localhost:3000/Phaser.Line.html#centerOn
    // centerOn(x, y) → {Phaser.Line}
    // Centers this Line on the given coordinates.
    // The line is centered by positioning the start and end points so that the lines midpoint matches the coordinates given.
    this.line.centerOn(this.input.activePointer.x, this.input.activePointer.y);

    ```
# circle
# circle-random-point
  - new Phaser.Circle>
    ```js
    // http://localhost:3000/Phaser.Circle.html
    // new Circle(x, y, diameter)
    // Creates a new Circle object with the center coordinate specified by the x and y parameters and the diameter specified by the diameter parameter.
    // If you call this function without parameters, a circle with x, y, diameter and radius properties set to 0 is created.
    this.circle = new Phaser.Circle(this.world.randomX, this.world.randomY, 500);

    ```
  - circle.random>
    ```js
    // http://localhost:3000/Phaser.Circle.html#random
    // random(out) → {Phaser.Point}
    // Returns a uniformly distributed random point from anywhere within this Circle.
    this.circle.random(this.point);

    ```
# ellipse-random-point
  - new Phaser.Ellipse>
    ```js
    // http://localhost:3000/Phaser.Ellipse.html
    // new Ellipse(x, y, width, height)
    // Creates a Ellipse object. A curve on a plane surrounding two focal points.
    this.ellipse = new Phaser.Ellipse(this.world.centerX, this.world.centerY, 300, 550);

    ```
  - ellipse.random>
    ```js
    // http://localhost:3000/Phaser.Ellipse.html#random
    // random(out) → {Phaser.Point}
    // Returns a uniformly distributed random point from anywhere within this Ellipse.
    this.ellipse.random(this.point);

    ```
# rectangle
  - new Phaser.Rectangle>
    ```js
    // http://localhost:3000/Phaser.Rectangle.html#
    // new Rectangle(x, y, width, height)
    // Creates a new Rectangle object with the top-left corner specified by the x and y parameters and with the specified width and height parameters.
    // If you call this function without parameters, a Rectangle with x, y, width, and height properties set to 0 is created.
    this.floor = new Phaser.Rectangle(0, 550, this.world.width, 50);

    ```
# rectangle-get-point
  - rectangle.getPoint>
    ```js
    // http://localhost:3000/Phaser.Rectangle.html#getPoint
    // Returns a point based on the given position constant, which can be one of:
    // Phaser.TOP_LEFT, Phaser.TOP_CENTER, Phaser.TOP_RIGHT, Phaser.LEFT_CENTER,
    // Phaser.CENTER, Phaser.RIGHT_CENTER, Phaser.BOTTOM_LEFT, Phaser.BOTTOM_CENTER and Phaser.BOTTOM_RIGHT.
    // This method returns the same values as calling Rectangle.bottomLeft, etc, but those
    // calls always create a new Point object, where-as this one allows you to use your own.
    rectangle.getPoint(Phaser.TOP_LEFT, p);

    ```
# rectangle-intersects
  - Phaser.Rectangle.intersection>
    ```js
    // http://localhost:3000/Phaser.Rectangle.html#
    // <static> intersection(a, b, output) → {Phaser.Rectangle}
    // If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.
    let intersects = Phaser.Rectangle.intersection(this.rectA, this.rectB);

    ```
  - rectangle.intersection>
    ```js
    // intersection(b, out) → {Phaser.Rectangle}
    // If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.

    ```
# rectangle-random-point
  - rectangle.random>
    ```js
    // http://localhost:3000/Phaser.Rectangle.html#random
    // random(out) → {Phaser.Point}
    // Returns a uniformly distributed random point from anywhere within this Rectangle.
    this.rectangle.random(this.point);

    ```
# quadtree
  - new Phaser.QuadTree>
    ```js
    // http://localhost:3000/Phaser.QuadTree.html#random
    // new QuadTree(x, y, width, height, maxObjects, maxLevels, level)
    // maxObjects{number=10}      The maximum number of objects per node.
    // maxLevels{number=4}        The maximum number of levels to iterate to.
    // level{number=0}            Which level is this?
    // A QuadTree implementation. The original code was a conversion of the Java code posted to GameDevTuts.
    // However I've tweaked it massively to add node indexing, removed lots of temp. var creation and significantly increased performance as a result.
    // Original version at https://github.com/timohausmann/quadtree-js/
    this.quadTree = new Phaser.QuadTree(0, 0, 800, 600, 10, 4, 0)

    ```
  - quadTree.insert>
    ```js
    // http://localhost:3000/Phaser.QuadTree.html#insert
    // insert(body)
    // body{{x,y,right,bottom}}
    // Insert the object into the node. If the node exceeds the capacity, it will split and add all objects to their corresponding subnodes.
    this.quadTree.insert(rect);

    ```
  - quadTree.retrieve>
    ```js
    // http://localhost:3000/Phaser.QuadTree.html#retrieve
    // retrieve(source) → {array}
    // source{Phaser.Sprite|Phaser.Rectangle}
    // Return all objects that could collide with the given Sprite or Rectangle.
    let found = this.quadTree.retrieve(this.marker);

    ```
# polygon
  - new Phaser.Polygon>
    ```js
    // http://localhost:3000/Phaser.Polygon.html
    // Creates a new Polygon.

    // The points can be set from a variety of formats:

    // An array of Point objects: [new Phaser.Point(x1, y1), ...]
    // An array of objects with public x/y properties: [obj1, obj2, ...]
    // An array of paired numbers that represent point coordinates: [x1,y1, x2,y2, ...]
    // As separate Point arguments: setTo(new Phaser.Point(x1, y1), ...)
    // As separate objects with public x/y properties arguments: setTo(obj1, obj2, ...)
    // As separate arguments representing point coordinates: setTo(x1,y1, x2,y2, ...)
    let polygon = new Phaser.Polygon();

    ```
  - polygon.setTo>
    ```js
    // http://localhost:3000/Phaser.Polygon.html#setTo
    // setTo(points) → {Phaser.Polygon}

    // Sets this Polygon to the given points.

    // The points can be set from a variety of formats:

    // An array of Point objects: [new Phaser.Point(x1, y1), ...]
    // An array of objects with public x/y properties: [obj1, obj2, ...]
    // An array of paired numbers that represent point coordinates: [x1,y1, x2,y2, ...]
    // An array of arrays with two elements representing x/y coordinates: [[x1, y1], [x2, y2], ...]
    // As separate Point arguments: setTo(new Phaser.Point(x1, y1), ...)
    // As separate objects with public x/y properties arguments: setTo(obj1, obj2, ...)
    // As separate arguments representing point coordinates: setTo(x1,y1, x2,y2, ...)
    // setTo may also be called without any arguments to remove all points.
    polygon.setTo([new Phaser.Point(200, 100), new Phaser.Point(350, 100), new Phaser.Point(275, 200), new Phaser.Point(150, 200)]);

    ```
# polygon-contains
  - polygon.contains>
    ```js
    // http://localhost:3000/Phaser.Polygon.html#contains
    // contains(x, y) → {boolean}
    // Checks whether the x and y coordinates are contained within this polygon.
    if (this.polygon.contains(this.input.x, this.input.y)) { }
    ```

