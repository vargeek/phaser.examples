import { BootState } from './boot.state';

import { ArcDetailsState } from './display/arc-details';
import { ArcState } from './display/arc';
import { ArcadePhysicsGraphicsShapeState } from './display/arcade-physics-graphics-shape';
import { CircleState } from './display/circle';
import { EllipseState } from './display/ellipse';
import { ExtractMaskState } from './display/extract-mask';
import { FullscreenButtonsState } from './display/fullscreen-buttons';
import { FullscreenState } from './display/fullscreen';
import { GameBackgroundColorState } from './display/game-background-color';
import { GenerateTextureFromGraphicsState } from './display/generate-texture-from-graphics';
import { GradientState } from './display/gradient';
import { Graphics2State } from './display/graphics-2';
import { GraphicsChildState } from './display/graphics-child';
import { GraphicsInputEventsState } from './display/graphics-input-events';
import { GraphicsPerfState } from './display/graphics-perf';
import { GraphicsState } from './display/graphics';
import { HsvColorWheelState } from './display/hsv-color-wheel';
import { PixiRenderTextureState } from './display/pixi-render-texture';
import { RenderCrispState } from './display/render-crisp';
import { RenderTextureImageState } from './display/render-texture-image';
import { RenderTextureMirrorState } from './display/render-texture-mirror';
import { RenderTextureRotationState } from './display/render-texture-rotation';
import { RenderTextureStarfieldState } from './display/render-texture-starfield';
import { RenderTextureTilemapState } from './display/render-texture-tilemap';
import { RenderTextureToTilespriteState } from './display/render-texture-to-tilesprite';
import { RenderTextureTrailState } from './display/render-texture-trail';
import { RoundPixelsState } from './display/round-pixels';
import { SpriteShadowState } from './display/sprite-shadow';
import { SpritesheetFromGraphicsState } from './display/spritesheet-from-graphics';
import { TintSpriteFrameState } from './display/tint-sprite-frame';
import { TintSpriteState } from './display/tint-sprite';
import { ViewportState } from './display/viewport';

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

// const app = new App(GameBackgroundColorState);
// const app = new App(CircleState);
// const app = new App(EllipseState);
// const app = new App(ArcState);
const app = new App(ArcDetailsState);
// const app = new App(ArcadePhysicsGraphicsShapeState);
// const app = new App(ExtractMaskState);
// const app = new App(FullscreenButtonsState);
// const app = new App(FullscreenState);
// const app = new App(GenerateTextureFromGraphicsState);
// const app = new App(GradientState);
// const app = new App(Graphics2State);
// const app = new App(GraphicsChildState);
// const app = new App(GraphicsInputEventsState);
// const app = new App(GraphicsPerfState);
// const app = new App(GraphicsState);
// const app = new App(HsvColorWheelState);
// const app = new App(PixiRenderTextureState);
// const app = new App(RenderCrispState);
// const app = new App(RenderTextureImageState);
// const app = new App(RenderTextureMirrorState);
// const app = new App(RenderTextureRotationState);
// const app = new App(RenderTextureStarfieldState);
// const app = new App(RenderTextureTilemapState);
// const app = new App(RenderTextureToTilespriteState);
// const app = new App(RenderTextureTrailState);
// const app = new App(RoundPixelsState);
// const app = new App(SpriteShadowState);
// const app = new App(SpritesheetFromGraphicsState);
// const app = new App(TintSpriteFrameState);
// const app = new App(TintSpriteState);
// const app = new App(ViewportState);
