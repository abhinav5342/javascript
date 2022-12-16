class Product{

// discount = 10;

  constructor(p,pr){

//    console.log("Called");

   this.product = p;
   this.price = pr;

  }

  displayProduct(){
  //  console.log(this.product,this.price,this.discount);

  }

  buyProduct(){

  }
}  

let motog = new Product("motog",10000);

// let mac = new Product ("macpro",120000);

// motog.displayProduct();
console.log(motog);
// console.log(typeof motog);