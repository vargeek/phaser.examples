import { BootState } from './boot.state';

import { AccelerateToPointerState } from './arcade-physics/accelerate-to-pointer';
import { AngleBetweenState } from './arcade-physics/angle-between';
import { AngleToPointerState } from './arcade-physics/angle-to-pointer';
import { AngularAccelerationState } from './arcade-physics/angular-acceleration';
import { AngularVelocityState } from './arcade-physics/angular-velocity';
import { AsteroidsMovementState } from './arcade-physics/asteroids-movement';
import { BodyDebugState } from './arcade-physics/body-debug';
import { BodyEnableState } from './arcade-physics/body-enable';
import { BodyScaleState } from './arcade-physics/body-scale';
import { BounceAcceleratorState } from './arcade-physics/bounce-accelerator';
import { BounceKnockState } from './arcade-physics/bounce-knock';
import { BounceWithGravityState } from './arcade-physics/bounce-with-gravity';
import { BounceState } from './arcade-physics/bounce';
import { BoundingBoxState } from './arcade-physics/bounding-box';
import { CircleBodyState } from './arcade-physics/circle-body';
import { CustomSpriteVsGroupState } from './arcade-physics/custom-sprite-vs-group';
import { DirectBodyMovementState } from './arcade-physics/direct-body-movement';
import { DistanceToPointerState } from './arcade-physics/distance-to-pointer';
import { GlobalPauseState } from './arcade-physics/global-pause';
import { GravityAndDragState } from './arcade-physics/gravity-and-drag';
import { GravityState } from './arcade-physics/gravity';
import { GroupVsGroupState } from './arcade-physics/group-vs-group';
import { GroupVsSelfState } from './arcade-physics/group-vs-self';
import { LargerBoundingBoxState } from './arcade-physics/larger-bounding-box';
import { LauncherFollowWorldState } from './arcade-physics/launcher-follow-world';
import { LauncherFollowState } from './arcade-physics/launcher-follow';
import { LauncherState } from './arcade-physics/launcher';
import { MaskedCollisionState } from './arcade-physics/masked-collision';
import { MassVelocityTestState } from './arcade-physics/mass-velocity-test';
import { MoveOverDistanceState } from './arcade-physics/move-over-distance';
import { MoveToPointerState } from './arcade-physics/move-to-pointer';
import { MoveTowardsObjectState } from './arcade-physics/move-towards-object';
import { MultiAngleToPointerState } from './arcade-physics/multi-angle-to-pointer';
import { MultiballState } from './arcade-physics/multiball';
import { NestedGroupState } from './arcade-physics/nested-group';
import { OffsetBoundingBoxState } from './arcade-physics/offset-bounding-box';
import { OnCollideEventState } from './arcade-physics/on-collide-event';
import { OneWayCollisionState } from './arcade-physics/one-way-collision';
import { PlatformerBasicsState } from './arcade-physics/platformer-basics';
import { PlatformerTightState } from './arcade-physics/platformer-tight';
import { ProcessCallbackState } from './arcade-physics/process-callback';
import { QuadtreeCollisionInfosState } from './arcade-physics/quadtree-collision-infos';
import { RotateToSpriteState } from './arcade-physics/rotate-to-sprite';
import { ShipTrailState } from './arcade-physics/ship-trail';
import { ShootThePointerState } from './arcade-physics/shoot-the-pointer';
import { SnakeState } from './arcade-physics/snake';
import { SortDirectionVerticalState } from './arcade-physics/sort-direction-vertical';
import { SortDirectionState } from './arcade-physics/sort-direction';
import { SpriteVsGroupState } from './arcade-physics/sprite-vs-group';
import { SpriteVsSpriteState } from './arcade-physics/sprite-vs-sprite';
import { VerticalCollisionState } from './arcade-physics/vertical-collision';
import { WorldBoundsEventState } from './arcade-physics/world-bounds-event';

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

// const app = new App(BodyEnableState);
// const app = new App(CircleBodyState);
// const app = new App(GravityState);
// const app = new App(AccelerateToPointerState);
// const app = new App(DistanceToPointerState);
// const app = new App(MoveToPointerState);
// const app = new App(MoveTowardsObjectState);
// const app = new App(AngleBetweenState);
// const app = new App(AngleToPointerState);
// const app = new App(MultiAngleToPointerState);
// const app = new App(AngularVelocityState);
// const app = new App(AngularAccelerationState);
// const app = new App(RotateToSpriteState);
// const app = new App(ShootThePointerState);
// const app = new App(MassVelocityTestState);
// const app = new App(AsteroidsMovementState);
// const app = new App(SpriteVsSpriteState);
// const app = new App(GroupVsSelfState);
// const app = new App(SpriteVsGroupState);
// const app = new App(GroupVsGroupState);
// const app = new App(DirectBodyMovementState);
// const app = new App(VerticalCollisionState);
// const app = new App(VerticalCollisionState);
// const app = new App(SortDirectionState);
// const app = new App(SortDirectionVerticalState);
// const app = new App(NestedGroupState);
// const app = new App(OneWayCollisionState);
// const app = new App(QuadtreeCollisionInfosState);
// const app = new App(BoundingBoxState);
// const app = new App(LargerBoundingBoxState);
// const app = new App(OffsetBoundingBoxState);
// const app = new App(OnCollideEventState);
// const app = new App(WorldBoundsEventState);
// const app = new App(ProcessCallbackState);
// const app = new App(GravityAndDragState);
// const app = new App(BounceState);
// const app = new App(BounceAcceleratorState);
// const app = new App(BounceKnockState);
// const app = new App(BounceWithGravityState);
// const app = new App(GlobalPauseState);
// const app = new App(MoveOverDistanceState);
// const app = new App(PlatformerBasicsState);
const app = new App(ShipTrailState);
