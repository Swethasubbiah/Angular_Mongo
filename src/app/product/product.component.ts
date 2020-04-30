import { Component, OnInit } from '@angular/core';
import { ProdService} from '../prod.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
productData:any=[];
  constructor(private apiServices:ProdService) { }
  public fetchData(){
    this.apiServices.getAllProduct().subscribe(result =>{
      this.productData=result['standup'];
    })
  }
  public postValue(){ 
    let Product = {
     
      "productname": "Product K",
      "productprice": "1100",
      "manudate": "04/28/2020",
      "exprdate": "04/28/2020"
  } 
  this.apiServices.postProduct(Product).subscribe(result => {
    console.log(result);
});
}
public putValue(){
  let Product = {
    
      "_id": "5ea7b13543838239748126a7",
      "productname": "Product AB",
     "productprice": "1",
     
     "manudate": "05/28/2020",
     "exprdate":"05/22/2020"
 
}
let _id = "5ea7b13543838239748126a7";

  this.apiServices.putProduct(Product,_id).subscribe(result => {
    console.log(result);
  });
}
public deleteValue(){
  let _id = "5ea7ca6843838239748126b2";   //j
  this.apiServices.deleteProduct(_id).subscribe(result => {
    console.log(result);
  });
  
}

  

}
