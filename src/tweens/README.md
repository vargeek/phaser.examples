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
# tween loop event
  - events
    ```js
    // onStart(target, tween), 如果有delay, onStart是在delay完成之后才触发.
    this.tween.onStart.add(this.onTweenStart, this);
    this.tween.onRepeat.add(this.onTweenLoop, this);
    this.tween.onComplete.add(this.onTweenComplete, this);

    ```

# pause tween
  - pause, resume
    ```js
    this.tween.pause();
    this.tween.resume();

    ```
# repeat
  ```js
  let tween = this.add.tween(sprite).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true);
  tween.repeat(10, 1000);
  // repeat v.s. start

  ```
# tween delay
  - delay
    ```js
    // delay=2000
    let tween = this.add.tween(pic).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true, 2000);

    // 2000ms 后start, 触发 onTweenStart
    tween.onStart.add(this.onTweenStart, this);
    tween.onComplete.add(this.onTweenCompleted, this);

    ```

# single tween reuse
  - tween reuse
    -```js
    this.tween = this.add.tween(this.sprite).to({y: 500}, 200, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween2, this);

    //  Notice the use of addOnce above. If you don't use that then you *must* do:
    // tween.onComplete.removeAll();
    //  before using the tween again, or it will fire both onComplete callbacks.

    tween2 () {
      // .to({y:500}).to({alpha: 0.5})
      this.tween.to({alpha: 0.5}, 2000, Phaser.Easing.Bounce.Out, true);
      this.tween.onComplete.addOnce(this.tween3, this);
    }
    tween3 () {
      // .to({y:500}).to({alpha: 0.5}).to({x:2,y:2})
      this.tween.to({x: 2, y: 2}, 2000, Phaser.Easing.Bounce.Out, true);
      this.tween.onComplete.addOnce(this.tween4, this);
    }

    ```
# tween reuse
  - group.cursor, group.next
    ```js
    this.sprites.cursor
    // The current display object that the group cursor is pointing to, if any. (Can be set manually.)
    // The cursor is a way to iterate through the children in a Group using next and previous.

    this.sprites.next();
    // Advances the group cursor to the next (higher) object in the group.
    // If the cursor is at the end of the group (top child) it is moved the start of the group (bottom child).

    ```

# chained tweens
  -  B start as soon as A complete
    ```js
    this.tweenA.chain(this.tweenB);

    ```
# combined tweens
  - onComplete
# tween several properties
  - 同时进行多个Tween
    ```js
      // 字母旋转掉下， 落地后 bounce 效果
      this.add.tween(item).to({y: 240}, 2000, Phaser.Easing.Bounce.Out, true, 1000 + 400 * index);
      this.add.tween(item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * index);

    ```

# bounce
# bubbles
  - bulles
    ```js
    for (let index = 0; index < 40; index++) {
      let sprite = this.add.sprite(-100 + this.world.randomX, 600, AssetID.ball);
      sprite.scale.set(this.rnd.realInRange(0.1, 0.6));
      let speed = this.rnd.between(4000, 6000);
      this.add.tween(sprite).to({y: -356}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
      delay += 200;
    }

    // in update()
    this.bg.tilePosition.y += 0.4;

    ```
# earthquake
  - earthquake
    ```js
    // we need to add margin to the world, so the camera can move
    var margin = 50;
    // and set the world's bounds according to the given margin
    var x = -margin;
    var y = -margin;
    var w = this.world.width + margin * 2;
    var h = this.world.height + margin * 2;
    // it's not necessary to increase height, we do it to keep uniformity
    this.world.setBounds(x, y, w, h);

    // we make sure camera is at position (0,0)
    this.world.camera.position.set(0);
    this.addQuake();

    addQuake () {
      let rumbleOffset = 10;
      let properties = {
        x: this.camera.x - rumbleOffset
      }

      let duration = 100;
      let repeat = 4;
      let ease = Phaser.Easing.Bounce.InOut;
      let autoStart = false;
      let delay = 1000;
      let yoyo = true;

      let quake = this.add.tween(this.camera)
        .to(properties, duration, ease, autoStart, delay, repeat, yoyo);

      quake.onComplete.addOnce(this.addQuake, this);

      quake.start();

    }


    ```
# fading in a sprite
# tween array
  - to({x:[],y:[]})
    ```js
    this.tween.to({x:[500, 500, 100, 100], y:[250, 150, 150, 250]}, 3000, Phaser.Easing.Linear.None);

    ```
# interpolation
  - tween.interpolation
    ```js
    this.tween = this.add.tween(this.logo).to({
      x: [w, w, 0, 0],
      y: [0, h, h, 0]
    }, 4000, Phaser.Easing.Sinusoidal.Out, true, 0, -1);
    this.tween.interpolation(Phaser.Math.bezierInterpolation);
    this.tween.interpolation(Phaser.Math.catmullRomInterpolation);
    this.tween.interpolation(Phaser.Math.linearInterpolation)

    ```
