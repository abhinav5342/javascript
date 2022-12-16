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

const obj = function(){
    console.log(this.getDetails());
}

const x = obj.bind(player1);
x();

//2
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42
  