function fetchdata(url){
    return new Promise(function (resolve,reject){
        console.log("start the download data", url);
        setTimeout(function processDownloading(){
            let data = "dummy download data";
            console.log("download completed ");
            resolve(data);
            return "saket";

        },7000) 
    });
}

function writefile(data){
    return new Promise(function(resolve,reject){
        console.log("Start writing ",data, "in a File ");
        setTimeout(function processWriting(){
            let filename = "result.txt";
            console.log("writing dummy file");
            resolve(filename);

        },4000)
    });

}

function uploaddata(file,url){
    return new Promise(function (resolve,reject){
        console.log("Upload started download of url",url,", filename is",file);
        setTimeout(function processUploading(){
            let result = "SUCCESS";
            console.log("Uploading dummy files");
            resolve(result);

        },5000)
    })

}

// let filename = writefile(data);
// let response = uploadFile(filename,"www.drive.com");
// let data = fetchdata("www.drive.com");
// this above written code wont work in required fashion





let downloadPromise = fetchdata("www.drive.com")
downloadPromise
.then(function processDownloading(value){
    console.log("processing download promise data");
    console.log(value);
    return value;
})
.then(function processWriting(value){
    return writefile(value);
})
.then(function processUploading(value){
    return uploaddata(value,"www.drive.com");
})