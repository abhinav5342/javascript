for ( var i= 1; i<=3 ; i++){
    setTimeout(function print(){
        console.log(`i:${i}`);
    } ,i*1000)
}



for ( var i= 1; i<=3 ; i++){
    let j=i;
    setTimeout(function print(){
        console.log(`j:${j}`);
    } ,i*1000)
}


for ( let i= 1; i<=3 ; i++){
    setTimeout(function print(){
        console.log(`i:${i}`);
    } ,i*1000)
}

