//1
var player1 = {
    name :"Virat",
    lastname:"Kohli",
    Numbertobat:"3",
    class:"permanent",  
getDetails: function () {
    console.log(this.name,this.lastname,"comes at No.",this.Numbertobat,"his class is permanent");
}
}

const obj = function(x,y){
    console.log(x+y);
    this.getDetails();
}

obj.call(player1,34,23);

//2

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
console.log(new Food('cheese').name,"-> ",new Food("c",343).price);