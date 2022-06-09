import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

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
  pageTitle: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter:', value);
   // this.filteredProducts = this.performFilter(value)
    this.products = this.performFilter(value)

  }

  filteredProducts: any[] = []
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this._listFilter= 'cart';
    //this.filteredProducts= this.products
    this.products = this.productService.getProducts();
  }

  performFilter(filterBy:string): any[]{
    filterBy = filterBy.toLowerCase(); 
    return this.products.filter((products:any) =>
    products.productName.toLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message:string): void {
    this.pageTitle = 'Product List: ' + message;

  }

}
