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

let username = 12345;
let password = 67891;

const u = document.getElementById("username").value;
const p = document.getElementById("password").value;
document.getElementById("u").innerText=u;
document.getElementById("p").innerText=p;

if (username==12345 && password==67891){
    alert("you're in");
}
else if (username == 12345 && password != 67891){
    alert("try again");
}
else if (username != 12345 && password == 67891){
    alert("try again");
}
else if (username != 12345 && password != 67891){
    alert("try again");
}
