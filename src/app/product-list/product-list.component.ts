import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  phones: any[];
  term;
  order: string = '';
 
  constructor(private http: HttpClient) {
    
   }
 
  ngOnInit(): void {
    this.http.get<any[]>("../../assets/puhelinten-tuotetiedot/phones/phones.json").subscribe(
      (data) => {
        this.phones = data;
        console.log("phones:", this.phones)
      }
    );
  }
 
  selectChange(event: any) {
    this.order = event.target.value;
  }
 
}