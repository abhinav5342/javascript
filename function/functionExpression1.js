var x = function (width, length){
    return width * length ;
}

console.log(x(3,4));



var y = function (n){
    if(n==0 || n==1){
        return 1;
    }else{
        return (n-1)*n ;
    }
}
console.log(y(0));
