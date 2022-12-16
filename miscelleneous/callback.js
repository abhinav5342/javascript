function fun( x ,fn){

    for( var i=0; i<x; i++){
        console.log(i);
    }


fn(); // function is called back
}



// fun(10, function log(){
//     //function fun is callback function, here its called 

//     console.log("Hi, there!")

// });

fun(10, function(){
    console.log("Anonymous");
});