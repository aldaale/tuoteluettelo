import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { phones } from '../phones';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  phones = phones; 
  order: string = '';
  term;

  constructor() { }

  ngOnInit(): void {
    
  }

  selectChange(event:any) {
    this.order = event.target.value;
  }

}
