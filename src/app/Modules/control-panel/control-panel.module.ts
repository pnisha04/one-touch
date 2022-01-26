import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/Components/Control-Panel/brands/brands.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  
];

@NgModule({
  declarations: [BrandsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[BrandsComponent]
})
export class ControlPanelModule { }
