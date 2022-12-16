function fetchdata(url){
    return new Promise( function (resolve,reject){
        console.log("start download");
        setTimeout(function process(){
            let data = "dummy data";
            console.log("The download is confirm");
            resolve(data);

        },1000)

    })
}

console.log("starting program");
console.log("mimicing the download process");
x = fetchdata("www.google.com");
console.log("The download is still in progress");
console.log(x);