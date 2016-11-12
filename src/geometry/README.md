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
# rotate-line
# line-intersection
# line-reflection
# line-bounds
# line-random-point
# center-line
# circle
# circle-random-point
# ellipse-random-point
# rectangle
# rectangle-get-point
# rectangle-intersects
# rectangle-random-point
# quadtree
# polygon
# polygon-contains

