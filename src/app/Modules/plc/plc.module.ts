import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/Components/PLC/brands/brands.component';
import { PlcDeltaComponent } from 'src/app/Components/PLC/brand-detail/plc-delta/plc-delta.component';
import { PlcMitsubishiComponent } from 'src/app/Components/PLC/brand-detail/plc-mitsubishi/plc-mitsubishi.component';
import { SchinederComponent } from 'src/app/Components/PLC/brand-detail/schineder/schineder/schineder.component';
import { SiemensComponent } from 'src/app/Components/PLC/brand-detail/siemens/siemens/siemens.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  {path:'delta',component:PlcDeltaComponent},
  {path:'mitsubishi',component:PlcMitsubishiComponent},
  {path:'schineder',component:SchinederComponent},
  {path:'siemens',component:SiemensComponent}

  
];


@NgModule({
  declarations: [BrandsComponent,PlcDeltaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[BrandsComponent,PlcDeltaComponent,RouterModule]
})
export class PlcModule { }
