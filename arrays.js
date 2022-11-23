var a=[1,2,3,4,5];
console.log(a[4]);

let b=new Array(2,8,6,0,4);
console.log(b[5]);
console.log(typeof(b));
console.log(b.pop());
console.log(b.push(5));
console.log(b);
b.unshift(1000);
b.unshift(10);
console.log(b);
console.log(b.shift());
console.log(b.splice(2,4,99));
console.log(b);
console.log(b.slice(0,2));
console.log(b);

for(let i=0;i<b.length;i++){
    console.log(b[i]+3);
}



