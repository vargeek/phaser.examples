import { BootState } from './boot.state';

import { AsteroidsBulletWrapState } from './weapon/asteroids-bullet-wrap';
import { AsteroidsState } from './weapon/asteroids';
import { AutofireState } from './weapon/autofire';
import { BulletAngleVarianceState } from './weapon/bullet-angle-variance';
import { BulletFrameCycleState } from './weapon/bullet-frame-cycle';
import { BulletSpeedVarianceState } from './weapon/bullet-speed-variance';
import { FireManyFromTrackedSpriteState } from './weapon/fire-many-from-tracked-sprite';
import { FireManyWithVarianceState } from './weapon/fire-many-with-variance';
import { FireManyState } from './weapon/fire-many';
import { FireOffsetPositionState } from './weapon/fire-offset-position';
import { FireRateState } from './weapon/fire-rate';
import { MultipleBulletsState } from './weapon/multiple-bullets';
import { SingleBulletState } from './weapon/single-bullet';

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

// const app = new App(AsteroidsBulletWrapState);
// const app = new App(AsteroidsState);
// const app = new App(AutofireState);
// const app = new App(BulletAngleVarianceState);
// const app = new App(BulletFrameCycleState);
const app = new App(BulletSpeedVarianceState);
// const app = new App(FireManyFromTrackedSpriteState);
// const app = new App(FireManyWithVarianceState);
// const app = new App(FireManyState);
// const app = new App(FireOffsetPositionState);
// const app = new App(FireRateState);
// const app = new App(MultipleBulletsState);
// const app = new App(SingleBulletState);
