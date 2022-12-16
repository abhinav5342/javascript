function task(todo) {
    return function a(){
        console.log("completed",task);
    }
}

var myTask = task("do it my way");
myTask();