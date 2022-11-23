print();

function print(){
    console.log("Shrilakshmi");
}


var a=0;
console.log(f1(3,4));

function f1(a,b){
    return a+b;
}


//TYPE2
console.log(a);

var f2=function(){
    console.log("You are awesome");

}
f2();


//IIFE


(function(a,b){
    console.log(a+b);
})(4,4);

let animal={
    name:'dog',
    eat(a,b){
        console.log(this.name +" is eating "+a+" "+b);
    }
};
let human={
    name:'sam'
};
animal.eat(5,'bones');
//call
animal.eat.call(human,10,'chips');
//apply
animal.eat.apply(human,[10,'chips']);
//bind
let he=animal.eat.bind(human);
he(5,'apples');

//using this
let k={
    name:'shree',
    obj(){console.log(this);}
};
console.log(k.obj());


//arrow function

let ob={
    name:'kiki',
    prnt:function(){
        console.log('a',this);
        var an_prnt=()=>{
            console.log('b',this);
        }
        an_prnt();
    }

};
ob.prnt();
//higherorder functions

function printt(){
    console.log("hellooo");
}

//setInterval
// console.log(setInterval(printt,1000));
// console.log(clearInterval(1));


// function canvote(age){
//     return age>=18;
// };

// function candrive(age){

//     return age>=16
// };

// function canMarry(age){
//     return age>=21;

// };
// console.log(candrive(11));
// console.log(canvote(21));
// console.log(canMarry(18));

function age_req(r_age){
    return function(age){
        return age >=r_age;
};
};
let can_vote=age_req(18);
console.log(can_vote(27));
let can_Drive=age_req(16);
console.log(can_Drive(27));
let can_Marry=age_req(16);
console.log(can_Marry(27));







