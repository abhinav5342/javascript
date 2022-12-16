
//internal function

function fun(inputString,fn){

    let output = inputString.split(',');
    for(let i=0;i<output.length;i++){
        fn(output[i]);
        //fn(output[i]);
    }
}   //This is an internal function whic can be used anytime in the program


//using internal function
fun("name:Abhinav,student:CSE",function process(ip){
    let arr = ip.split(':');    
    console.log("{",arr[0],"=>",arr[1],"}");
})

