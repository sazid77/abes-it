// "use strict"
// function display(){
//     alert("ell")
// }


// let a=10
// let b=22/7
// let c='helo'
// let f=true
// let obj={
//     name:"sazid",
//     id:12
// }
// console.log(typeof obj )


// let x="12"/"6"
// console.log(x)

// let bol=true
// let str = String(bol)
// console.log(str.at(1))

// let str ="true"
// let num=Number(str)
// console.log(num)

// function display(){
//     let x=confirm("are you sure")
//     alert(x)
// }

// function display(){
//     let x=prompt("enter your name :","sazid")
//     alert(x)
// }


function validate(){
    let login = document.getElementById("login").value;
    let pass = document.getElementById("pass").value;
    let msg=document.getElementById("result");
    if(pass=="admin"&&login=="admin"){
         msg.innerHTML="login succesfully"
    }
    else{
     msg.innerText="login fail"
    }
    return false
}








