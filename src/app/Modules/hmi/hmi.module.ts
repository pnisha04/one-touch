import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/Components/HMI/brands/brands.component';
import { HmiDeltaComponent } from 'src/app/Components/HMI/brand-detail/hmi-delta/hmi-delta.component';
import { HmiMitsubishiComponent } from 'src/app/Components/HMI/brand-detail/hmi-mitsubishi/hmi-mitsubishi.component';
import { HmiSchneiderComponent } from 'src/app/Components/HMI/brand-detail/hmi-schneider/hmi-schneider.component';
import { HmiSiemensComponent } from 'src/app/Components/HMI/brand-detail/hmi-siemens/hmi-siemens.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  {path:'delta',component:HmiDeltaComponent},
  {path:'mitsubishi',component:HmiMitsubishiComponent},
  {path:'schneider',component:HmiSchneiderComponent},
  {path:'siemens',component:HmiSiemensComponent}
  
];

@NgModule({
  declarations: [BrandsComponent,HmiDeltaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  ],
  exports:[RouterModule, BrandsComponent,HmiDeltaComponent]
})
export class HmiModule { }
