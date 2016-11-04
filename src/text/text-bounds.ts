import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextBoundsState extends BootState {
  text: Phaser.Text;
  index = 0;
  ipsum = "Click to change alignment\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur?\n\nSi longus, levis; Ita relinquet duas, de quibus etiam atque etiam consideret. Optime, inquam. Sed quanta sit alias, nunc tantum possitne esse tanta.\n\nQuid, si etiam iucunda memoria est praeteritorum malorum?";
  align = [
    { h: 'left', v: 'top', a: 'left' },
    { h: 'center', v: 'top', a: 'center' },
    { h: 'right', v: 'top', a: 'right' },
    { h: 'left', v: 'middle', a: 'left' },
    { h: 'center', v: 'middle', a: 'center' },
    { h: 'right', v: 'middle', a: 'right' },
    { h: 'left', v: 'bottom', a: 'left' },
    { h: 'center', v: 'bottom', a: 'center' },
    { h: 'right', v: 'bottom', a: 'right' }
  ];

  preload () {

    this.load.image('bg', 'assets/skies/deepblue.png');

  }

  create () {

    this.add.image(0, 0, 'bg');

    // http://localhost:3000/Phaser.Text.html#wordWrap
    // wordWrap :boolean
    // Indicates if word wrap should be used.

    // http://localhost:3000/Phaser.Text.html#wordWrapWidth
    // wordWrapWidth :number
    // The width at which text will wrap.
    let style: Phaser.PhaserTextStyle = {
      font: '16px Arial',
      fill: '#fff',
      boundsAlignH: 'left',
      boundsAlignV: 'top',
      wordWrap: true,
      wordWrapWidth: 300,
    }

    this.text = this.add.text(0, 0, this.ipsum, style);
    // http://localhost:3000/Phaser.Text.html#setTextBounds
    // setTextBounds(x, y, width, height) → {Phaser.Text}
    // The Text Bounds is a rectangular region that you control the dimensions of into which the Text object itself is positioned, regardless of the number of lines in the text, the font size or any other attribute.

    // Alignment is controlled via the properties boundsAlignH and boundsAlignV within the Text.style object, or can be directly set through the setters Text.boundsAlignH and Text.boundsAlignV. Bounds alignment is independent of text alignment.

    // For example: If your game is 800x600 in size and you set the text bounds to be 0,0,800,600 then by setting boundsAlignH to 'center' and boundsAlignV to 'bottom' the text will render in the center and at the bottom of your game window, regardless of how many lines of text there may be.
    // Even if you adjust the text content or change the style it will remain at the bottom center of the text bounds.

    // This is especially powerful when you need to align text against specific coordinates in your game,
    // but the actual text dimensions may vary based on font (say for multi-lingual games).

    // If Text.wordWrapWidth is greater than the width of the text bounds it is clamped to match the bounds width.

    // Call this method with no arguments given to reset an existing textBounds.

    // It works by calculating the final position based on the Text.canvas size, which is modified as the text is updated. Some fonts
    // have additional padding around them which you can mitigate by tweaking the Text.padding property. It then adjusts the pivot
    // property based on the given bounds and canvas size. This means if you need to set the pivot property directly in your game then
    // you either cannot use setTextBounds or you must place the Text object inside another DisplayObject on which you set the pivot.
    this.text.setTextBounds(16, 16, 768, 568);
    this.input.onDown.add(this.changeAlign, this);

  }

  changeAlign () {

    this.index++;

    if (this.index === this.align.length) {
      this.index = 0;
    }

    this.text.align = this.align[this.index].a;
    this.text.boundsAlignH = this.align[this.index].h;
    this.text.boundsAlignV = this.align[this.index].v;

  }

}
