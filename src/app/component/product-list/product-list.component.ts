import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productHeader: String = 'Product List';
  imageWidth = 50;
  showImage: boolean = false;
  //listFilter: string = 'cart';

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value)
  }

  filteredProducts: any[] = []
  products:any[] = [{
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity rolling garden",
    "price": 32.99,
    "starRarting": "4.2",
    "imageUrl": "assets/images/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "curved claw steel hammer",
    "price": 9.9,
    "starRarting": "4.8",
    "imageUrl": "assets/images/hammer.png"
  }
  ];

  constructor() { }

  ngOnInit(): void {
    this._listFilter= 'cart';
  }

  performFilter(filterBy:string): any[]{
    filterBy = filterBy.toLowerCase(); 
    return this.products.filter((products:any) =>
    products.productName.toLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
