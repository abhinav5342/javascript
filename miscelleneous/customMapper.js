function mapper( arr, fn){

    let result = [];

    for( var i=0; i < arr.length ;i++){

        let res = fn (arr[i],i) ;

        result.push(res);
    }

    return result;
}

let arr = [1,2,3,4,5,6];
let x = mapper(arr,function execute(v,i){
      
    console.log(v,": ",v*v*v);
    return v*v*v;
});

console.log(arr,"-> the cube is :",x);