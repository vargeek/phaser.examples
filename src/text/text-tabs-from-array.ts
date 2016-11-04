import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextTabsFromArrayState extends BootState {
  text: Phaser.Text;

  preload () {

    this.load.image('bg', 'assets/skies/deepblue.png');

  }

  create () {

    this.add.image(0, 0, 'bg');

    // http://localhost:3000/Phaser.Text.html#tabs
    // tabs :integer|array
    // The size (in pixels) of the tabs, for when text includes tab characters. 0 disables.
    // Can be an integer or an array of varying tab sizes, one tab per element.
    // For example if you set tabs to 100 then when Text encounters a tab it will jump ahead 100 pixels.
    // If you set tabs to be [100,200] then it will set the first tab at 100px and the second at 200px.
    let style = {
      font: '16px Courier',
      fill: 'fff',
      tabs: [164, 120, 80],
    }

    let headings = [ 'Name', 'Damage', 'Speed', 'Notes' ];

    let text = this.add.text(32, 64, '', style);

    // parseList(list) → {Phaser.Text}
    // Converts the given array into a tab delimited string and then updates this Text object.
    // This is mostly used when you want to display external data using tab stops.
    // The array can be either single or multi dimensional depending on the result you need:
    // [ 'a', 'b', 'c' ] would convert in to "a\tb\tc".
    // Where as:
    // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f'] ]
    // would convert in to: "a\tb\tc\nd\te\tf"
    text.parseList(headings);

    let swords = [
        [ 'Knife', '1d3', '1', '' ],
        [ 'Dagger', '1d4', '1', 'May be thrown' ],
        [ 'Rapier', '1d6', '2', 'Max strength damage bonus +1' ],
        [ 'Sabre', '1d6', '3', 'Max strength damage bonus +3' ],
        [ 'Cutlass', '1d6', '5', '' ],
        [ 'Scimitar', '2d4', '4', '' ],
        [ 'Long Sword', '1d8+1', '6', '' ],
        [ 'Bastard Sword', '1d10+1', '8', 'Requires 2 hands to use effectively' ],
        [ 'Great Sword', '1d12+1', '10', 'Must always be used with 2 hands']
    ];

    let text2 = this.add.text(32, 120, '', style);
    text2.parseList(swords);



  }

}
