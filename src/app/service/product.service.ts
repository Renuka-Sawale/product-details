import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): any[] {
    return [
      {
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
    ]

  }
  
}
