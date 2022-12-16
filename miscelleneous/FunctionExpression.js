var x = function(){
    console.log("Examine Staying out");
}
x();

// second method to get function expression get going

(function(){
    console.log("code rocks!");
}) ();

// third method to get function expression get going

!function(){
    console.log("code rocks!");
}();


const foo = function () {
    console.log("foo");
};
foo.name // "foo"

