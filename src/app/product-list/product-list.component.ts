import { Component, OnInit } from '@angular/core';
import { phones } from '../phones';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  value = 'Search something...';
  phones = phones;
  constructor() { }

  ngOnInit(): void {
  }

}
