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


async function processing(){
    let DownloadedData = await fetchdata("www.google.com");
    console.log("Downloading file completed");
    let file = await writefile(DownloadedData);
    console.log("writing file completed");
    let uploadResponse = await uploaddata(file,"www.google.com");
    console.log("completed promise with response :", uploadResponse);

    return true;
}

processing();