import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ControlPanelModule } from './Modules/control-panel/control-panel.module';
import { EncoderModule } from './Modules/encoder/encoder.module';
import { HmiModule } from './Modules/hmi/hmi.module';
import { MotionControllerModule } from './Modules/motion-controller/motion-controller.module';
import { PlcModule } from './Modules/plc/plc.module';
import { PowerSupplyModule } from './Modules/power-supply/power-supply.module';
import { ServoModule } from './Modules/servo/servo.module';
import { VfdModule } from './Modules/vfd/vfd.module';

const routes: Routes = [
  {path:'home',component:LandingComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'control-panel',loadChildren :() => import('./Modules/control-panel/control-panel.module').then(m => m.ControlPanelModule)},
  {path:'encoder',loadChildren :() => import('./Modules/encoder/encoder.module').then(m => m.EncoderModule)},
  {path:'hmi',loadChildren :() => import('./Modules/hmi/hmi.module').then(m => m.HmiModule)},
  {path:'motion-controller',loadChildren :() => import('./Modules/motion-controller/motion-controller.module').then(m => m.MotionControllerModule)},
  {path:'plc',loadChildren :() => import('./Modules/plc/plc.module').then(m => m.PlcModule)},
  {path:'power-supply',loadChildren :() => import('./Modules/power-supply/power-supply.module').then(m => m.PowerSupplyModule)},
  {path:'servo',loadChildren :() => import('./Modules/servo/servo.module').then(m => m.ServoModule)},
  {path:'vfd',loadChildren :() => import('./Modules/vfd/vfd.module').then(m => m.VfdModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ControlPanelModule,EncoderModule,HmiModule,MotionControllerModule,PlcModule,PowerSupplyModule,ServoModule,VfdModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
