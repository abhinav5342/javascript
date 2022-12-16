function task(todo) {
    setTimeout( function a(){
        console.log("completed",task);
    }, 2000);
}

task("do it my way");