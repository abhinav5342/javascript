function dummyPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Done");
            resolve("x")
        },0);
    })
}


console.log("Start the promise ");


setTimeout(function timer1(){
    console.log("timer1 Done");
    let y = Promise.resolve("Immediately resolve");
    y.then(function promiseY(value){
        console.log("Who's promise?",value);
    })
},1000);

let x = Promise.resolve("Abhinav's promise");
x.then(function processPromise(value){
     console.log("Who's promise?",value);
});

setTimeout(function timer2(){
    console.log("timer2 is done");
},0);


console.log("End of promise");