import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  phoneId: String;
  phone: any;
  phoneImage: any;
 
  constructor(
    private route: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.phoneId = params['productId'];
      console.log("phoneId", this.phoneId);
    })
 
    this.http.get<any>(`../../assets/phones/${this.phoneId}.json`).subscribe(data => {
      this.phone = data;
      this.phoneImage = data.images[0];
    })
  }
 
}