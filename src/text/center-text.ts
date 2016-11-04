import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CenterTextState extends BootState {
  text: Phaser.Text;

  preload () {

    this.load.image('bg', 'assets/skies/deepblue.png');

  }

  create () {

    this.add.image(0, 0, 'bg');

    let bar = this.add.graphics(0, 0);
    bar.beginFill(0x000000, 0.2);
    bar.drawRect(0, 100, 800, 100);


    // http://localhost:3000/Phaser.Text.html#boundsAlignH
    // boundsAlignH :string
    // Horizontal alignment of the text within the textBounds. Can be: 'left', 'center' or 'right'.
    // http://localhost:3000/Phaser.Text.html#boundsAlignV
    // boundsAlignV :string
    // Vertical alignment of the text within the textBounds. Can be: 'top', 'middle' or 'bottom'.
    // http://localhost:3000/Phaser.Text.html#font
    // font :string
    // Change the font family that the text will be rendered in, such as 'Arial'.
    // Multiple CSS font families and generic fallbacks can be specified as long as CSS font-family rules are followed.
    // To change the entire font string use cssFont instead: eg. text.cssFont = 'bold 20pt Arial'.
    // http://localhost:3000/Phaser.Text.html#fill
    // fill :object
    // A canvas fillstyle that will be used on the text eg 'red', '#00FF00'.
    let style: Phaser.PhaserTextStyle = {
      font: 'bold 32px Arial',
      fill: '#fff',
      boundsAlignH: 'center',
      boundsAlignV: 'middle'
    };

    // http://localhost:3000/Phaser.GameObjectFactory.html#text
    // text(x, y, text, style, group) → {Phaser.Text}
    // Creates a new Text object.
    this.text = this.add.text(0, 0, 'phaser 2.6 text bounds', style);

    // http://localhost:3000/Phaser.Text.html#setShadow
    // setShadow(x, y, color, blur, shadowStroke, shadowFill) → {Phaser.Text}
    // Sets a drop shadow effect on the Text. You can specify the horizontal and vertical distance of the drop shadow with the x and y parameters.
    // blur=0: The shadowBlur value. Make the shadow softer by applying a Gaussian blur to it. A number from 0 (no blur) up to approx. 10 (depending on scene).
    // shadowStroke=true: Apply the drop shadow to the Text stroke (if set).
    // shadowFill=true: Apply the drop shadow to the Text fill (if set).

    // The color controls the shade of the shadow (default is black) and can be either an rgba or hex value.
    // The blur is the strength of the shadow. A value of zero means a hard shadow, a value of 10 means a very soft shadow.
    // To remove a shadow already in place you can call this method with no parameters set.
    this.text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    // http://localhost:3000/Phaser.Text.html#setTextBounds
    // setTextBounds(x, y, width, height) → {Phaser.Text}
    // The Text Bounds is a rectangular region that you control the dimensions of into which the Text object itself is positioned,  regardless of the number of lines in the text, the font size or any other attribute.

    // Alignment is controlled via the properties boundsAlignH and boundsAlignV within the Text.style object, or can be directly set through the setters Text.boundsAlignH and Text.boundsAlignV. Bounds alignment is independent of text alignment.

    // For example: If your game is 800x600 in size and you set the text bounds to be 0,0,800,600 then by setting boundsAlignH to 'center' and boundsAlignV to 'bottom' the text will render in the center and at the bottom of your game window, regardless of  how many lines of text there may be. Even if you adjust the text content or change the style it will remain at the bottom center of the text bounds.

    // This is especially powerful when you need to align text against specific coordinates in your game, but the actual text dimensions may vary based on font (say for multi-lingual games).

    // If Text.wordWrapWidth is greater than the width of the text bounds it is clamped to match the bounds width.

    // Call this method with no arguments given to reset an existing textBounds.

    // It works by calculating the final position based on the Text.canvas size, which is modified as the text is updated. Some fonts have additional padding around them which you can mitigate by tweaking the Text.padding property. It then adjusts the pivot
    // property based on the given bounds and canvas size. This means if you need to set the pivot property directly in your game then you either cannot use setTextBounds or you must place the Text object inside another DisplayObject on which you set the pivot.
    this.text.setTextBounds(0, 100, 800, 100);

    // http://localhost:3000/Phaser.Text.html#wordWrapWidth
    // wordWrapWidth :number
    // The width at which text will wrap.

    // http://localhost:3000/Phaser.Text.html#padding
    // padding :Phaser.Point
    // Specify a padding value which is added to the line width and height when calculating the Text size.
    // ALlows you to add extra spacing if Phaser is unable to accurately determine the true font dimensions.

  }

  render () {

    // this.game.debug.geom(this.text.textBounds);

  }

}
