import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from 'src/app/Components/Motion-Controller/brands/brands.component';
import { RouterModule, Routes } from '@angular/router';

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
export class MotionControllerModule { }
