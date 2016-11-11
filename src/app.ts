import { BootState } from './boot.state';

import { AlphaWebmState } from './video/alpha-webm';
import { ChangeSourceState } from './video/change-source';
import { DolbyDigitalPlusState } from './video/dolby-digital-plus';
import { LoadAsBlobState } from './video/load-as-blob';
import { MultipleVideosState } from './video/multiple-videos';
import { PlayVideoState } from './video/play-video';
import { SnapshotBlendModeState } from './video/snapshot-blend-mode';
import { SpritesSharingVideoState } from './video/sprites-sharing-video';
import { TakeSnapshotFromStreamState } from './video/take-snapshot-from-stream';
import { VideoStreamState } from './video/video-stream';

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

// const app = new App(LoadAsBlobState);
// const app = new App(PlayVideoState);
// const app = new App(MultipleVideosState);
// const app = new App(AlphaWebmState);
// const app = new App(ChangeSourceState);
// const app = new App(DolbyDigitalPlusState);
// const app = new App(SnapshotBlendModeState);
// const app = new App(SpritesSharingVideoState);
// const app = new App(TakeSnapshotFromStreamState);
const app = new App(VideoStreamState);
