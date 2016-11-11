import { BootState } from './boot.state';

import { AutoScaleState } from './particles/auto-scale';
import { ClickBurstState } from './particles/click-burst';
import { CollisionState } from './particles/collision';
import { DestroyEmitterState } from './particles/destroy-emitter';
import { DiamondBurstState } from './particles/diamond-burst';
import { EmitterWidthState } from './particles/emitter-width';
import { FirestarterState } from './particles/firestarter';
import { FlowState } from './particles/flow';
import { GlassState } from './particles/glass';
import { NoRotationState } from './particles/no-rotation';
import { ParticleAlphaState } from './particles/particle-alpha';
import { ParticleClassState } from './particles/particle-class';
import { ParticleScaleState } from './particles/particle-scale';
import { ParticlesVsPlatformsState } from './particles/particles-vs-platforms';
import { RainState } from './particles/rain';
import { RandomSpriteState } from './particles/random-sprite';
import { SmokeTrailState } from './particles/smoke-trail';
import { SnowState } from './particles/snow';
import { TweenedEmitterState } from './particles/tweened-emitter';
import { WhenParticlesCollideState } from './particles/when-particles-collide';
import { WorldParticlesState } from './particles/world-particles';
import { ZeroGravityState } from './particles/zero-gravity';
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

// const app = new App(DiamondBurstState);
// const app = new App(ClickBurstState);
// const app = new App(DestroyEmitterState);
// const app = new App(EmitterWidthState);
// const app = new App(AutoScaleState);
// const app = new App(CollisionState);
// const app = new App(FirestarterState);
// const app = new App(FlowState);
// const app = new App(GlassState);
// const app = new App(NoRotationState);
// const app = new App(ParticleAlphaState);
// const app = new App(ParticleClassState);
// const app = new App(ParticleScaleState);
// const app = new App(ParticlesVsPlatformsState);
// const app = new App(RainState);
// const app = new App(RandomSpriteState);
// const app = new App(SmokeTrailState);
// const app = new App(SnowState);
// const app = new App(TweenedEmitterState);
// const app = new App(WhenParticlesCollideState);
// const app = new App(WorldParticlesState);
const app = new App(ZeroGravityState);
