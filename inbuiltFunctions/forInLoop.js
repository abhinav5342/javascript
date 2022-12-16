var obj = {x:2,w:23,z:12}
for (const property in obj){
    console.log(`${property}:${obj[property]}`);
}