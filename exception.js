const er=new Error("Its a error!!");
console.log(er.message);
console.log(er.name);
// console.log(er.stack);


// function a(){
//     const b=new Error("Errorr!");
//     console.log(b);
// }
// a();

//try-catch

try{
    console.log(a);
    console.log("chal bye");
}
//cannot put anything between try and catch
catch(error){//can also remove parameter
    console.log("error is"+error);//a is not defined-reference error
}

//throw +finally

function A(age){
    if(age<16){
        try{
            throw new Error("You are under age");
        }
        catch(error){
            console.log("There is error"+error);
        }
        finally{
            console.log("Always excecuted");
        }
    }
    else{
        console.log("You are eligible to vote");
    }
}
A(13);
A(19);

//finally

try{
    console.log(a);
}
finally{
    console.log("End of code");
}