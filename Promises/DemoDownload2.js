function FetchCustom(url,fn){
    console.log("Started download");
    setTimeout(function process(){
        console.log("Download successfull");
        let response = "Some data";
        fn(response);
    },10000)
}

let response = FetchCustom("www.google.com", function callback (response){
             console.log("Download content is :", response);
             console.log("End of download");
})