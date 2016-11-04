import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmaptextPurgeGlyphsState extends BootState {
  bmpText: Phaser.BitmapText;
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Si longus, levis; Ita relinquet duas, de quibus etiam atque etiam consideret. Optime, inquam. Sed quanta sit alias, nunc tantum possitne esse tanta.\n\nQuid, si etiam iucunda memoria est praeteritorum malorum? Consequatur summas voluptates non modo parvo, sed per me nihilo, si potest; Atque his de rebus et splendida est eorum et illustris oratio. Mihi enim satis est, ipsis non satis. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Mihi quidem Antiochum, quem audis, satis belle videris attendere. Et quod est munus, quod opus sapientiae? Ex rebus enim timiditas, non ex vocabulis nascitur. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Quae cum magnifice primo dici viderentur, considerata minus probabantur.\n\n---> Click to remove text";

  preload () {

    this.load.bitmapFont('gem', 'assets/fonts/bitmapFonts/gem.png', 'assets/fonts/bitmapFonts/gem.xml');

  }

  create () {

    this.stage.backgroundColor = 0x272822;

    this.bmpText = this.add.bitmapText(32, 32, 'gem', this.text, 16);

    this.bmpText.maxWidth = 400;

    //  Click to remove text and purge glyphs
    this.input.onDown.addOnce(this.chopText, this);

  }

  chopText () {

    this.bmpText.text = this.text.substr(0, 26);
    console.log(this.bmpText.text);

    // http://localhost:3000/Phaser.BitmapText.html#purgeGlyphs
    // If a BitmapText changes from having a large number of characters to having very few    characters it will cause lots of Sprites to be retained in the BitmapText._glyphs array. Although they are not attached to the display list they still take up memory while sat in the glyphs pool waiting to be re-used in the future.
    // If you know that the BitmapText will not grow any larger then you can purge out the    excess glyphs from the pool by calling this method. Calling this doesn't prevent you from increasing the length of the text again in the future.
    // Returns:  integer - The amount of glyphs removed from the pool.
    let purged = this.bmpText.purgeGlyphs();

    this.add.bitmapText(32, 128, 'gem', `Purged ${purged} glyphs`);

  }

}
