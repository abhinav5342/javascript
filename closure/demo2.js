function todo(task){
    console.log("start todo");
    setTimeout( function fun(){
            console.log("Complete", task);
    }, 3000);

    console.log("End of todo");
}

console.log("Start");
todo("Assignment");
console.log("End");