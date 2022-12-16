function FetchCustom(url){
    console.log("Started download");
    setTimeout(function process(){
        console.log("Download successfull");
        let response = "Some data";
        return response;
    },4000)
}
// There wont be any asynchronous behavior w.r.t this program as we are 
// returning response in the setTimeout itself, thus we cant expect any response when it is called back.
let response = FetchCustom("www.google.com", function callback (response){
             console.log("Download content is :", response);
             console.log("End of download");
})
