//Encapsulation
class Box{
    constructor(length){
        this.length=length;
        console.log("constructor called");
    }
    display(){
        console.log(this);

    }
}
let obj=new Box(20);
obj.display();

//protype inheritance
let father={
    name:'john'
};
let son1={}
let son=Object.create(father);
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));

var parent={
    name:"father",
    sing(){
        console.log("singing");
    },
    eat: function(){
        console.log("eating");
    },
    drink:()=>{
        console.log("Drinking");
    }
};
var child={
    name:"Son",
    eat(){
        console.log("Eating");
    }
};
child.__proto__=parent;
for(let p in child){
    console.log(p+" "+child.hasOwnProperty(p));
}



//inheritance
class fruits{
    constructor(color){
        this.color=color;
        // console.log("Parent cons");
        }
        print(){
            console.log(this);
        }

}
class Apple extends fruits{
    constructor(color,type){
        super(color);
        // console.log("Child cons");
        this.type=type;

    }
    print(){
        console.log(this);
    }
}
let obj1 =new Apple("Red,apple");
obj1.print();
let ob=new fruits("Pink");
ob.print();




//polymorphism-overriding
class p{
    live(){
        console.log("Mumbai");
    }
}
class c extends p{
    live(){
        console.log("Karkala");
    }
}

var o=new c();
o.live();





