function demo1(url){
    return new Promise(function (resolve,reject){
        console.log("Hi");
        setTimeout(function process(){
            console.log("Task done");
            resolve("The task is similar to previous one");
        },4000)
        console.log("you");
    })
}

y = demo1();
console.log(y);