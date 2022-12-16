function Product(n,p){
    this.name=n;
    this.price=p;
    // return this;

    this.display= function(){
        console.log(this.name,this.price,this);
    }
    this.buy =()=>{
        console.log(this);
    }
}

const p1 = new Product ("iphone",200000);

// console.log(p1);
p1.display();
console.log("2");
// p1.buy();