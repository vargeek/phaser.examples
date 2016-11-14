import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ViewportState extends BootState {

  create () {

    this.stage.backgroundColor = '#440e62';

  }

  render () {

    let x = 32;
    let y = 0;
    let yi = 32;

    this.game.debug.text('Viewport', x, y += yi);
    this.game.debug.text('Viewport Width: ' + (this.scale as any) .viewportWidth, x, y += yi);
    this.game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
    this.game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);
    this.game.debug.text('Viewport Height: ' + (this.scale as any).viewportHeight, x, y += yi);
    this.game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
    this.game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);
    this.game.debug.text('Document', x, y += yi*2);
    this.game.debug.text('Document Width: ' + (this.scale as any).documentWidth, x, y += yi);
    this.game.debug.text('Document Height: ' + (this.scale as any).documentHeight, x, y += yi);
    x = 350;
    y = 0;
    this.game.debug.text('Device', x, y += yi);
    this.game.debug.text('window.screen.width: ' + window.screen.width, x, y += yi);
    this.game.debug.text('window.screen.availWidth: ' + window.screen.availWidth, x, y += yi);
    this.game.debug.text('window.screen.height: ' + window.screen.height, x, y += yi);
    this.game.debug.text('window.screen.availHeight: ' + window.screen.availHeight, x, y += yi);


  }

}
