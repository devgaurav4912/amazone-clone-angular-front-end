import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit{

  constructor( private service : HttpService){}

  products : Product = <Product>{};

  productList! : any [];

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.service.getProductDetails().subscribe((res:any)=>{
      this.productList = res;
      console.log(res);
    })
  }

  addToCart(id:any){
    this.service.getProductById(id).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
