console.log("connected");
// console.log(document);
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// console.log(document.title);
// console.log(document.all);
// console.log(document.all[2]);
// document.title=12345;

// var age=prompt("Enter age");
// if(age>20){
//     alert("you are valid user!!");
// }
// else
// alert("try again");


//byId
var head=document.getElementById("header");
console.dir(head);
//by class name
var cls=document.getElementsByClassName("hobby");
console.dir(cls);

//by tag name
var cls3=document.getElementsByTagName("p");
console.dir(cls3);
// cls3[0].textContent="changed para";
//queryselector
document.querySelectorAll(".hobby");//picks all


//events
function change(id){
    id.innerHTML="clicked";
}
var button=document.querySelector('button');
button.addEventListener('click',function(){
    console.log("Button was clickrd");

});


