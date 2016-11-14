import { BootState } from './boot.state';

import { AlphaMaskState } from './bitmapdata/alpha-mask';
import { AtlasState } from './bitmapdata/atlas';
import { CachedBitmapdataState } from './bitmapdata/cached-bitmapdata';
import { CopyBitmapdataState } from './bitmapdata/copy-bitmapdata';
import { CopyPixelsState } from './bitmapdata/copy-pixels';
import { DrawAtlasFrameState } from './bitmapdata/draw-atlas-frame';
import { DrawBlendedSpriteState } from './bitmapdata/draw-blended-sprite';
import { DrawFullState } from './bitmapdata/draw-full';
import { DrawGroupState } from './bitmapdata/draw-group';
import { DrawSpriteState } from './bitmapdata/draw-sprite';
import { FastcopyDrawState } from './bitmapdata/fastcopy-draw';
import { FloodFillState } from './bitmapdata/flood-fill';
import { GetPixelState } from './bitmapdata/get-pixel';
import { PlotState } from './bitmapdata/plot';
import { ProcessPixels1State } from './bitmapdata/process-pixels-1';
import { ProcessPixels2State } from './bitmapdata/process-pixels-2';
import { ProcessPixels3State } from './bitmapdata/process-pixels-3';
import { RadialGradientState } from './bitmapdata/radial-gradient';
import { ReplaceColorState } from './bitmapdata/replace-color';
import { RevealState } from './bitmapdata/reveal';
import { SetHslState } from './bitmapdata/set-hsl';
import { SpriteTextureState } from './bitmapdata/sprite-texture';
import { TextBlendState } from './bitmapdata/text-blend';
import { TextState } from './bitmapdata/text';
import { TintState } from './bitmapdata/tint';
import { WobbleState } from './bitmapdata/wobble';

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

// const app = new App(AlphaMaskState);
// const app = new App(AtlasState);
// const app = new App(CachedBitmapdataState);
// const app = new App(CopyBitmapdataState);
// const app = new App(CopyPixelsState);
// const app = new App(DrawAtlasFrameState);
// const app = new App(DrawBlendedSpriteState);
// const app = new App(DrawFullState);
// const app = new App(DrawGroupState);
// const app = new App(DrawSpriteState);
// const app = new App(FastcopyDrawState);
// const app = new App(FloodFillState);
// const app = new App(GetPixelState);
// const app = new App(PlotState);
// const app = new App(ProcessPixels1State);
// const app = new App(ProcessPixels2State);
// const app = new App(ProcessPixels3State);
// const app = new App(RadialGradientState);
// const app = new App(ReplaceColorState);
// const app = new App(RevealState);
// const app = new App(SetHslState);
// const app = new App(SpriteTextureState);
// const app = new App(TextBlendState);
// const app = new App(TextState);
// const app = new App(TintState);
const app = new App(WobbleState);
