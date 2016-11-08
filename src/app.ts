import { BootState } from './boot.state';

import { AccelerateToObjectState } from './p2-physics/accelerate-to-object';
import { BasicMovementState } from './p2-physics/basic-movement';
import { BodyClickState } from './p2-physics/body-click';
import { BodyDebugState } from './p2-physics/body-debug';
import { ChainState } from './p2-physics/chain';
import { CollideCustomBoundsState } from './p2-physics/collide-custom-bounds';
import { CollideWorldBoundsState } from './p2-physics/collide-world-bounds';
import { CollisionGroupsState } from './p2-physics/collision-groups';
import { ContactEventsState } from './p2-physics/contact-events';
import { ContactMaterialState } from './p2-physics/contact-material';
import { DistanceConstraintState } from './p2-physics/distance-constraint';
import { GearConstraintState } from './p2-physics/gear-constraint';
import { GravityScaleState } from './p2-physics/gravity-scale';
import { GravityState } from './p2-physics/gravity';
import { ImpactEventsState } from './p2-physics/impact-events';
import { KillAndReviveState } from './p2-physics/kill-and-revive';
import { KinematicBodyState } from './p2-physics/kinematic-body';
import { LoadPolygon1State } from './p2-physics/load-polygon-1';
import { LoadPolygon2State } from './p2-physics/load-polygon-2';
import { LoadPolygon3State } from './p2-physics/load-polygon-3';
import { LockConstraintState } from './p2-physics/lock-constraint';
import { MouseSpringState } from './p2-physics/mouse-spring';
import { MovementConstraintState } from './p2-physics/movement-constraint';
import { PhysicsGroupState } from './p2-physics/physics-group';
import { PickUpObjectState } from './p2-physics/pick-up-object';
import { PlatformerMaterialState } from './p2-physics/platformer-material';
import { PostbroadphaseCallbackState } from './p2-physics/postbroadphase-callback';
import { PrismaticConstraintState } from './p2-physics/prismatic-constraint';
import { RemoveSpringState } from './p2-physics/remove-spring';
import { RevoluteConstraintState } from './p2-physics/revolute-constraint';
import { SpringsState } from './p2-physics/springs';
import { StateResetState } from './p2-physics/state-reset';
import { StaticBodyState } from './p2-physics/static-body';
import { ThrustLeftRightState } from './p2-physics/thrust-left-right';
import { ThrustState } from './p2-physics/thrust';
import { TilemapGravityState } from './p2-physics/tilemap-gravity';
import { TilemapState } from './p2-physics/tilemap';
import { TilespriteState } from './p2-physics/tilesprite';
import { WorldBoundaryState } from './p2-physics/world-boundary';
import { WorldMoveState } from './p2-physics/world-move';

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

// const app = new App(AccelerateToObjectState);
// const app = new App(BasicMovementState);
// const app = new App(BodyClickState);
// const app = new App(BodyDebugState);
// const app = new App(ChainState);
const app = new App(CollideCustomBoundsState);
// const app = new App(CollideWorldBoundsState);
// const app = new App(CollisionGroupsState);
// const app = new App(ContactEventsState);
// const app = new App(ContactMaterialState);
// const app = new App(DistanceConstraintState);
// const app = new App(GearConstraintState);
// const app = new App(GravityScaleState);
// const app = new App(GravityState);
// const app = new App(ImpactEventsState);
// const app = new App(KillAndReviveState);
// const app = new App(KinematicBodyState);
// const app = new App(LoadPolygon1State);
// const app = new App(LoadPolygon2State);
// const app = new App(LoadPolygon3State);
// const app = new App(LockConstraintState);
// const app = new App(MouseSpringState);
// const app = new App(MovementConstraintState);
// const app = new App(PhysicsGroupState);
// const app = new App(PickUpObjectState);
// const app = new App(PlatformerMaterialState);
// const app = new App(PostbroadphaseCallbackState);
// const app = new App(PrismaticConstraintState);
// const app = new App(RemoveSpringState);
// const app = new App(RevoluteConstraintState);
// const app = new App(SpringsState);
// const app = new App(StateResetState);
// const app = new App(StaticBodyState);
// const app = new App(ThrustLeftRightState);
// const app = new App(ThrustState);
// const app = new App(TilemapGravityState);
// const app = new App(TilemapState);
// const app = new App(TilespriteState);
// const app = new App(WorldBoundaryState);
// const app = new App(WorldMoveState);
