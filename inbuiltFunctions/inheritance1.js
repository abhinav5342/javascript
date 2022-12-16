class category{
    constructor(c){
        this.categoryName=c;
    }
    getcategoryName(){
        console.log("category is",this.categoryName);
    }
}

class product extends category{
    constructor(n,p,c){
        super(c);
        this.name=n;
        this.price=p;
    }
    display(){
        console.log(this.name);
        console.log(this.price);
        this.categoryName();

    }
}
let p = new product("Abhinav",120000000,"Man");
console.log(p);
p.getcategoryName();