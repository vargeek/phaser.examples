import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveEventState extends BootState {
  counters: number[] = [];
  text: Phaser.Text[] = [];
  timerEvents: Phaser.TimerEvent[] = [];
  index = 9;

  create () {

    this.stage.backgroundColor = '#68e';

    for (let index = 0; index < 10; index++) {

      this.counters[index] = 0;
      this.text[index] = this.add.text(this.world.centerX, 80 + 40 * index, `Counter ${index} = 0`, {
        font: '32px Arial',
        fill: '#fff',
        align: 'center',
      });
      this.text[index].anchor.set(0.5, 0);

      this.timerEvents[index] = this.time.events.loop(this.rnd.integerInRange(250, 1000), this.updateCounter, this, index);

    }

    this.input.onDown.add(this.removeCounter, this);

  }

  updateCounter (index: number) {

    this.counters[index]++;
    this.text[index].setText(`Counter ${index} = ${this.counters[index]}`);

  }

  removeCounter () {

    if (this.index >= 0) {
      // http://localhost:3000/Phaser.Timer.html#remove
      // remove(event)
      // event{Phaser.TimerEvent}   The event to remove from the queue.
      // Removes a pending TimerEvent from the queue.
      this.time.events.remove(this.timerEvents[this.index]);

      this.text[this.index].fill = '#34a';
      this.text[this.index].setText(`Counter ${this.index} removed`);
      this.index--;

    }

  }

  render () {

    this.game.debug.text(`Queued events: ${this.time.events.length} - click to remove`, 32, 32);

  }

}
