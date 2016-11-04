import { BootState } from './boot.state';

import { BitmapFontCacheAsBitmapState } from './text/bitmap-font-cache-as-bitmap';
import { BitmapFontFromTextureAtlasState } from './text/bitmap-font-from-texture-atlas';
import { BitmapFontsState } from './text/bitmap-fonts';
import { BitmapfontDragState } from './text/bitmapfont-drag';
import { BitmaptextAnchorXState } from './text/bitmaptext-anchor-x';
import { BitmaptextAnchorYState } from './text/bitmaptext-anchor-y';
import { BitmaptextMaxWidthState } from './text/bitmaptext-max-width';
import { BitmaptextPurgeGlyphsState } from './text/bitmaptext-purge-glyphs';
import { BitmaptextWithPhysicsUpdatingState } from './text/bitmaptext-with-physics-updating';
import { BitmaptextWithPhysicsState } from './text/bitmaptext-with-physics';
import { CenterTextOnSpriteState } from './text/center-text-on-sprite';
import { CenterTextState } from './text/center-text';
import { CleanTextState } from './text/clean-text';
import { ColoredCharactersState } from './text/colored-characters';
import { DisplayTextWordByWordState } from './text/display-text-word-by-word';
import { DynamicTextShadowState } from './text/dynamic-text-shadow';
import { ExtendingTextState } from './text/extending-text';
import { GoogleWebfontsState } from './text/google-webfonts';
import { HelloArialState } from './text/hello-arial';
import { KernOfDutyState } from './text/kern-of-duty';
import { LineColorState } from './text/line-color';
import { LitteraState } from './text/littera';
import { RemoveTextState } from './text/remove-text';
import { RetroFont1State } from './text/retro-font-1';
import { RetroFont2State } from './text/retro-font-2';
import { SetPropertiesAfterCreationState } from './text/set-properties-after-creation';
import { TextBoundsState } from './text/text-bounds';
import { TextEventsState } from './text/text-events';
import { TextGradientState } from './text/text-gradient';
import { TextLineSpacingState } from './text/text-line-spacing';
import { TextPaddingState } from './text/text-padding';
import { TextReflectState } from './text/text-reflect';
import { TextResolutionState } from './text/text-resolution';
import { TextShadowStrokeState } from './text/text-shadow-stroke';
import { TextShadowState } from './text/text-shadow';
import { TextStrokeWithColorState } from './text/text-stroke-with-color';
import { TextStrokeState } from './text/text-stroke';
import { TextTabsFromArrayState } from './text/text-tabs-from-array';
import { TextTabsWithGoogleFontState } from './text/text-tabs-with-google-font';
import { TextTabsState } from './text/text-tabs';
import { TextTintState } from './text/text-tint';
import { TextWithPhysicsState } from './text/text-with-physics';
import { UpdateTextState } from './text/update-text';
import { WordWrapState } from './text/word-wrap';

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

// const app = new App(BitmapFontCacheAsBitmapState);
// const app = new App(BitmapFontFromTextureAtlasState);
// const app = new App(BitmapFontsState);
// const app = new App(BitmapfontDragState);
// const app = new App(BitmaptextAnchorXState);
// const app = new App(BitmaptextAnchorYState);
// const app = new App(BitmaptextMaxWidthState);
// const app = new App(BitmaptextPurgeGlyphsState);
// const app = new App(BitmaptextWithPhysicsUpdatingState);
// const app = new App(BitmaptextWithPhysicsState);
// const app = new App(CenterTextOnSpriteState);
// const app = new App(CenterTextState);
// const app = new App(CleanTextState);
// const app = new App(ColoredCharactersState);
// const app = new App(DisplayTextWordByWordState);
// const app = new App(DynamicTextShadowState);
// const app = new App(ExtendingTextState);
// const app = new App(GoogleWebfontsState);
// const app = new App(HelloArialState);
// const app = new App(KernOfDutyState);
// const app = new App(LineColorState);
// const app = new App(LitteraState);
// const app = new App(RemoveTextState);
// const app = new App(RetroFont1State);
// const app = new App(RetroFont2State);
// const app = new App(SetPropertiesAfterCreationState);
// const app = new App(TextBoundsState);
// const app = new App(TextEventsState);
// const app = new App(TextGradientState);
// const app = new App(TextLineSpacingState);
// const app = new App(TextPaddingState);
// const app = new App(TextReflectState);
// const app = new App(TextResolutionState);
// const app = new App(TextShadowStrokeState);
// const app = new App(TextShadowState);
// const app = new App(TextStrokeWithColorState);
// const app = new App(TextStrokeState);
// const app = new App(TextTabsFromArrayState);
// const app = new App(TextTabsWithGoogleFontState);
// const app = new App(TextTabsState);
// const app = new App(TextTintState);
// const app = new App(TextWithPhysicsState);
// const app = new App(UpdateTextState);
const app = new App(WordWrapState);
