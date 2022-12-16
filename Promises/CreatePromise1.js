//Without using callbacks , we can write some piece of code to
//download some data from the url:
function fetchData(url) {
    return newPromise (function (resolve,reject){
     console.log("Start fetching from url");
     setTimeout( function process(){
        let data = "dummy data";
        console.log("Timer gets started");
        // try to return value

        resolve(data);
    },4000)
    })
    
}


function fetch1(url){
    return new Promise(function (resolve,reject){
        for(let i=0; i<10000000; i++){
            //some task
        }
        console.log("completed");
        resolve("Abhinav");
    })
}