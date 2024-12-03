//let age = 17;
//
//if (age>=18) {
//    alert("You are an adult");
//} 
//
//else if(age>=13){
//    alert("You are a teenager");
//}
//
//else{
//    alert("You are a child");
//}

//let score = 87;
//
//if (score>=90){
//    alert("You got an A");
//}
//
//else if (score>=80){
//    alert("You got a B");
//}
//
//else{
//    alert("you gotta lock in");
//}

//let temp = 28;
//let contition = "sunny";
//
//if(temp >= 70 && condition == "sunny"){
//    alert("wear a t-shirt");
//}
//
//else if (temp > 40 && (condition == "rainy" || condition == "stormy")){
//    alert("wear a raincoat");
//}
//
//else if (temp <= 30 || condition == "snowy"){
//    alert("wear a winter coat");
//}
//
//else if (temp >30 && temp < 50){
//    alert("wear a coat");
//}
//
//else if (temp >= 50 && temp <70){
//    alert("wear a hoodie");
//}

const username = 12345;
let password = 67891;

function login(){
    
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    let message = document.getElementById("yourMessage");
    
    if (u==username && p==password){
    message.innerText = "logged in";
    message.style.color = "green";
}
    else if (u==username && p!=password){
    message.innerText = "password is incorrect";
    message.style.color = "red";
}
    else if (u!=username && p==password){
    message.innerText = "username is incorrect";
    message.style.color = "red";
}
    else if (u!=username && p!=password){
    message.innerText = "both inputs are incorrect";
    message.style.color = "red";
}
    
}
