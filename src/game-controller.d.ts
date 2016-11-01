declare module "game-controller" {
  export = GameController;
}

declare module GameController {

  export class GameController {
    static init(options: GameController.InitOptions): void;
  }

  interface MoveDetails {
    dx: number;
    dy: number;
    max: number;
    normalizedX: number;
    normalizedY: number;
  }

  interface TouchStart {
    (): void;
  }
  interface TouchEnd {
    (): void;
  }
  interface TouchMove {
    (event: MoveDetails): void;
  }

  interface Key {
    width?: string;
    height?: string;
    stroke?: number;
    touchStart?: TouchStart;
    touchEnd?: TouchEnd;
  }

  interface Position {
    top?:string;
    left?:string;
    bottom?:string;
    right?:string;
  }

  interface Point {
    x: string | number;
    y: string | number;
  }

  interface Joystick {
    radius?: number;
    touchStart?: TouchStart;
    touchEnd?: TouchEnd;
    touchMove?: TouchMove;
  }

  interface Dpad {
    up?: Key;
    left?: Key;
    down?: Key;
    right?: Key;
  }

  interface Button {
    offset?: Point;
    label?: string;
    radius?: string;
    stroke?: string;
    backgroundColor?: string | number;
    fontColor?: string | number;
    touchStart?: () => void;
    touchEnd?: () => void;
  }

  interface GameControl {
    type?: string;
    position?: Position;
    dpad?: Dpad;
    buttons?: Button[];
    joystick?: Joystick;
  }

  interface InitOptions {
    left?: GameControl;
    right?: GameControl;
    touchRadius?: number;
  }

}
