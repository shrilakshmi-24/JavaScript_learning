let add=function(x){
    return function(y){
        console.log(x+y);
    }
}
let addbby5=add(5);
addbby5(2);
addbby5(5);
addbby5(10);


let mul=function(x,y){
    console.log(x+y);
}
let mulBy10=mul.bind(this,10);
mulBy10(7);
mulBy10(17);
mulBy10(71);

//arrow function

let mul1=(x)=>(y)=>console.log(x*y);
let mul10=mul1(10);
mul10(8);
mul10(80);
mul10(18);

//promise
const promise=new Promise((resolve,reject)=>{
    if(true)
        resolve("It worked");
    else
        reject("failed");
});
console.log(promise.then(result=>result+"hahahah"));