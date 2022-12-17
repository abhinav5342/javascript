const  http = require('http');
const PORT = 3000;
/*
http module contains a function called createServer
This createServer function takes a callback as the input
Now , inside the callback , we get two arguments

*request--this argument contains all the details about the incoming requests

*response--This arguments contains functions using which we can prepare a
            response.
*The createServer function returns to the server object.
*/
const server = http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url == '/home'){
        response.end("Homepage!");
    }else if(request.url == '/faq'){
        response.end("List of faqs");
    }else{
        response.end("HelloWorld!!!");
    }
});


server.listen(PORT, function process(){
    /*once the server is started then the callback will be executed
    */
    console.log("Server started on port", PORT)
})