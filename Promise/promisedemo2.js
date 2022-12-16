function demo2(val){
    return new Promise(function (resolve,reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("completed timer");
            if(val % 2 == 0){
                //even number
                resolve("even");
            }else{
                reject("odd");
            }
        },1000);

        console.log("Somewhere");
    });
}
x = demo2(10);
console.log(x);

