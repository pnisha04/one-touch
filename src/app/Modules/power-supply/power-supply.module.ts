import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/Components/Power-Supply/brands/brands.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PowerSupplyModule { }
