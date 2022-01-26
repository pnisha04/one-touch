import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigatetoDetails(){
    this.router.navigate(['/encoder/details'])
  }

}
