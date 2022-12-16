function fun(){
    console.log("Remind me again");
}
function gun(fn){
    console.log("gain something");
    fn() ;
        console.log("I'm here");
        console.trace();
};

gun(fun);
gun(function logger(){
    console.trace();
    console.log("again a chance");
});
