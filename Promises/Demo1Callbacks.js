function FetchCustom(url,fn){

    //download of content 
    //downloading will take some time
    console.log("started Downloading file");
    setTimeout(function process(){
        console.log("Downloaded file");
        let response = "Dummy data";
        fn(response);
    },1000)
}

function writeFile(data,fn){
    console.log("Started writing file");
    setTimeout(function process(){
        console.log("written file");
        let filename="data.text";
        fn(filename);
    },2000)
}

function uploadFile(filename,newurl,fn){
    console.log("Started uploading file");
    setTimeout(function process(){
        console.log("file :" ,filename,"upload completed on",newurl);
        let uploadResponse = "SUCCESS"
        fn(uploadResponse);
    },4000)
}

FetchCustom("www.google.com", function democallbacks(response){
    console.log("download response is :", response);
    writeFile(response,function writeCallbacks(filename){
        console.log("Downloaded response is :", filename);
        uploadFile(filename,"www.google.com",function uploadcallback(uploadResponse){
            console.log("Successfully uploaded ",uploadResponse);
        })
    })
})
