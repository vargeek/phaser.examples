import { BootState } from './boot.state';

import { AudioSpriteDurationState } from './audio/audio-sprite-duration';
import { AudioSpriteJsonState } from './audio/audio-sprite-json';
import { AudioSpriteState } from './audio/audio-sprite';
import { FadeInState } from './audio/fade-in';
import { IosState } from './audio/ios';
import { LoopState } from './audio/loop';
import { PauseAndResumeMarkerState } from './audio/pause-and-resume-marker';
import { PauseAndResumeState } from './audio/pause-and-resume';
import { PlayMusicState } from './audio/play-music';
import { ProtrackerState } from './audio/protracker';
import { RemoveSoundState } from './audio/remove-sound';
import { RestartSoundState } from './audio/restart-sound';
import { SoundCompleteState } from './audio/sound-complete';
import { YmState } from './audio/ym';

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

// const app = new App(AudioSpriteState);
// const app = new App(AudioSpriteDurationState);
// const app = new App(AudioSpriteJsonState);
// const app = new App(FadeInState);
// const app = new App(IosState);
// const app = new App(LoopState);
// const app = new App(PauseAndResumeState);
// const app = new App(PauseAndResumeMarkerState);
// const app = new App(PlayMusicState);
// const app = new App(RestartSoundState);
// const app = new App(RemoveSoundState);
const app = new App(SoundCompleteState);
// const app = new App(ProtrackerState);
// const app = new App(YmState);
