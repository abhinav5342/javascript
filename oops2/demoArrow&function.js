var obj= {
    name:"Abhi",
    comp:"self",
    display: function(){
        console.log(this.name,"works inn",this.comp);
    }
}
obj.display();


var obj2={
    name:"Ankush",
    comp:"Microdoft",
    display:()=>{
        console.log(this.name,"works in",this.comp);
    }
}
obj2.display();

var obj3={
    name:"Vishal",
    comp:"Microdoft",
    display:function(){
        setTimeout(()=>{
            console.log(this.name,"works in",this.comp);
        },3000);
        
    }
}
obj3.display();