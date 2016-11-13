import { BootState } from './boot.state';

import { CenterLineState } from './geometry/center-line';
import { CentroidState } from './geometry/centroid';
import { CircleRandomPointState } from './geometry/circle-random-point';
import { CircleState } from './geometry/circle';
import { EllipseRandomPointState } from './geometry/ellipse-random-point';
import { LineBoundsState } from './geometry/line-bounds';
import { LineIntersectionState } from './geometry/line-intersection';
import { LineMidpointState } from './geometry/line-midpoint';
import { LineRandomPointState } from './geometry/line-random-point';
import { LineReflectionState } from './geometry/line-reflection';
import { LineState } from './geometry/line';
import { PlayingWithPointsState } from './geometry/playing-with-points';
import { PolygonContainsState } from './geometry/polygon-contains';
import { PolygonState } from './geometry/polygon';
import { QuadtreeState } from './geometry/quadtree';
import { RectangleGetPointState } from './geometry/rectangle-get-point';
import { RectangleIntersectsState } from './geometry/rectangle-intersects';
import { RectangleRandomPointState } from './geometry/rectangle-random-point';
import { RectangleState } from './geometry/rectangle';
import { RotateLineState } from './geometry/rotate-line';
import { RotatePointState } from './geometry/rotate-point';

const BootStateKey = 'boot';
class App {
  game: Phaser.Game;

  constructor (boot:typeof BootState) {
    let info = boot.bootInfo;
    this.game = new Phaser.Game(info.bounds.width, info.bounds.height, info.renderer, '');
    this.addStatesAndBoot(boot);
  }

  addStatesAndBoot (boot: typeof BootState) {
    boot.bootInfo.states.forEach((state)=>{
      this.game.state.add(state.key, state.constructor);
    });
    this.game.state.add(BootStateKey, boot, true);
  }
}

// const app = new App(RotatePointState);
// const app = new App(CentroidState);
// const app = new App(LineState);
// const app = new App(LineMidpointState);
// const app = new App(RotateLineState);
// const app = new App(LineIntersectionState);
// const app = new App(LineReflectionState);
// const app = new App(LineBoundsState);
// const app = new App(LineRandomPointState);
// const app = new App(CenterLineState);
// const app = new App(CircleState);
// const app = new App(CircleRandomPointState);
// const app = new App(EllipseRandomPointState);
// const app = new App(RectangleState);
// const app = new App(RectangleGetPointState);
// const app = new App(RectangleIntersectsState);
const app = new App(RectangleRandomPointState);
// const app = new App(PlayingWithPointsState);
// const app = new App(PolygonContainsState);
// const app = new App(PolygonState);
// const app = new App(QuadtreeState);
