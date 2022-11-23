
//map
let arr=[1,2,3,4];
let newarr=arr.map(num=>num*2);
console.log(newarr);

//filter
let arr1=[1,2,3,4];
let newarr1=arr.filter(num=>num>2.5);
console.log(newarr1);

//reduce=map+filter

let ar=[1,2,3,4];
let newar=ar.reduce((acc,num)=>acc+num,100);
console.log(newar);