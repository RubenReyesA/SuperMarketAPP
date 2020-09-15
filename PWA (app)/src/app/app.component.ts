import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supermarket APP';
  button1 = false;
  emptyText = "There are no products in your list."
  newName="";
  newQ="";
  productList: any[] = [
    {"name": "Bread",
    "Q": "4"},
    {"name": "Tomato",
    "Q": "1"},
    {"name": "Water",
    "Q": "2"},
    {"name": "Soap",
    "Q": "5"},
    {"name": "Rice",
    "Q": "3"},
    {"name": "Wine",
    "Q": "8"},
  ];
  addProduct(){
    if(this.newName=="" || this.newQ==""){
      alert("Impossible to add an incomplete product");
    }
    else{
    this.button1=false;
    this.productList.push({"name": this.newName, "Q":this.newQ});
    this.newName="";
    this.newQ="";
    alert("Product was successfully added");
    }
  };

  buy(){
    alert("All products have been bought successfully! The product list is empty now!");
    this.productList=[];
    this.button1=true;
  }
}
