function product(n,p,c){
    this.name= n;
    this.price= p;

    Category.call(this, c);
}

function Category(c){
    this.categoryName=c;
}
product.prototype = Object.create(Category.prototype);

let p = new product("iphone",100000,"Electronics");
Category.prototype.getcategoryName= function(){
    console.log(this.categoryName);
}
p.getcategoryName();