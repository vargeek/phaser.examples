# tween from
  - create, from
    ```js
    // GameObjectFactory.tween(obj: any): Phaser.Tween;

    // It will end up at the middle of the game, as it's tweening FROM the value given below to its current position.

    this.game.add.tween(this.sprite).from({y: -200}, 2000, Phaser.Easing.Bounce.Out, true);

    // this.tweens.create(this.sprite).from(...);
    // this.make.tween(this.sprite).from(...);
    // new Phaser.Tween(this.sprite, this.game, this.tweens).from(...);

    from(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
    // Sets this tween to be a from tween on the properties given. A from tween sets the target to the destination value and tweens to its current value.
    // For example a Sprite with an x coordinate of 100 tweened from x 500 would be set to x 500 and then tweened to x 100 by giving a properties object of { x: 500 }.
    // The ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as "Circ".
    // ".easeIn", ".easeOut" and "easeInOut" variants are all supported for all ease types.

    ```

# tween to
  - to
    ```js
    to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
    this.add.tween(sprite).to({y: this.world.centerY}, 4000, Phaser.Easing.Bounce.Out, true);

    ```
# tween relative
  - relative value
    ```js
      '+300': 在原值加上300
      this.add.tween(this.sprite).to({x: '+300'}, 2000, Phaser.Easing.Linear.None, true);

    ```

# yoyo
  - yoyo
    ```js
    // delay=0, repeat=-1
    let tween = this.add.tween(sprite).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true, 0, -1);

    // And this tells it to yoyo, i.e. fade back to zero again before repeating.
    // The 3000 tells it to wait for 3 seconds before starting the fade back.

    // yoyo(enable: boolean, yoyoDelay?: number, index?: number): Phaser.Tween;
    // start v.s. yoyo
    tween.yoyo(true, 3000);

    ```

# alpha text
  - tween alpha
    ```js
    text.alpha = 0.1;
    this.add.tween(text).to({alpha: 1}, 3000, Phaser.Easing.Linear.None, true, 0, -1, true);

    ```
# tween rotation
  - tween rotaton
    ```js
        this.add.tween(this.arrow).to({angle: newAngle}, time, Phaser.Easing.Linear.None, true);

    ```
  - 两点相对原点的角度
    ```js
    let angleTo = this.arrow.position.angle(this.lemming.position, true);
    let shortesAngle = (this.game.math as any).getShortestAngle(angleTo, this.arrow.angle);
    let newAngle = this.arrow.angle - shortesAngle;

    ```

# easing
  - easing
    ```js
    let tween = this.add.tween(item).to({y: 245}, 2400, Phaser.Easing.Bounce.Out, true);

    ```
# easing spritesheets
