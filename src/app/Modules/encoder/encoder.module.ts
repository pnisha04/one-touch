import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/Components/Encoder/brands/brands.component';
import { BrandDetailComponent } from 'src/app/Components/Encoder/brands/brand-detail/brand-detail.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  {path:'details',component:BrandDetailComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EncoderModule { }
