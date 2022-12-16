//1
//A normal object will let update or add new key value pairs 
var obj = {
    x:20,
    y:30
}
obj.x=40;
obj.z=32;
console.log(obj);


//2
//Freeze is used to not change or update or any new value an object
var obj1 = {
    x:34,
    y:54
}
Object.freeze(obj1);
obj1.x= 23;
console.log(obj1);

//3
//Seal is used to update a value but we can't add new values
var obj2 = {
    x:234,
    y:432
}
Object.seal(obj2);
obj2.x=323;
obj2.z=984;
console.log(obj2);