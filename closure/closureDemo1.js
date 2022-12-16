function last(task){
    setTimeout( function a(){
        console.log("completed",task);
    }, 2000);
}

console.log("start");
last("papa");
console.log("last");