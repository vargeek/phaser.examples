import { BootState } from './boot.state';

import { BasicFollowState } from './camera/basic-follow';
import { CameraCullState } from './camera/camera-cull';
import { CameraFadeState } from './camera/camera-fade';
import { CameraFlashState } from './camera/camera-flash';
import { CameraLerpState } from './camera/camera-lerp';
import { CameraShakeState } from './camera/camera-shake';
import { CameraViewState } from './camera/camera-view';
import { DeadzoneState } from './camera/deadzone';
import { FixedToCameraState } from './camera/fixed-to-camera';
import { FollowStylesState } from './camera/follow-styles';
import { MassCameraCullState } from './camera/mass-camera-cull';
import { MovingTheCameraState } from './camera/moving-the-camera';
import { SmoothFollowState } from './camera/smooth-follow';
import { WorldSpriteState } from './camera/world-sprite';
import { ZoomingTheCameraState } from './camera/zooming-the-camera';

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

// const app = new App(BasicFollowState);
// const app = new App(CameraCullState);
// const app = new App(CameraFadeState);
// const app = new App(CameraFlashState);
// const app = new App(CameraLerpState);
// const app = new App(CameraShakeState);
// const app = new App(CameraViewState);
// const app = new App(DeadzoneState);
// const app = new App(FixedToCameraState);
// const app = new App(FollowStylesState);
// const app = new App(MassCameraCullState);
// const app = new App(MovingTheCameraState);
// const app = new App(SmoothFollowState);
// const app = new App(WorldSpriteState);
const app = new App(ZoomingTheCameraState);
