function generate(){
    let message = document.getElementById("newname");
    
    //let lastname = "";
    
    if (document.getElementById("month").value=="january"){
        message.innerText="Sunset";
    }
    if (document.getElementById("month").value=="febuary");{
        message.innerText="Spur-Spikes";
    }
    if (document.getElementById("month").value=="march");{
        message.innerText="Mosey-Moore";
    }
    if (document.getElementById("month").value=="april");{
        message.innerText="Caboodle";
    }
    if (document.getElementById("month").value=="may");{
        message.innerText="Barns";
    }
    if (document.getElementById("month").value=="june");{
        message.innerText="Barn-Sour";
    }
    if (document.getElementById("month").value=="july");{
        message.innerText="Gulch-Water";
    }
    if (document.getElementById("month").value=="august");{
        message.innerText="Gitty-Up";
    }
    if (document.getElementById("month").value=="september");{
        message.innerText="Tumbleweed";
    }
    if (document.getElementById("month").value=="october");{
        message.innerText="Lone-Star";
    }
    if (document.getElementById("month").value=="november");{
        message.innerText="Bee-Bonnet";
    }
    if (document.getElementById("month").value=="december");{
        message.innerText="Cahoots";
    }
    
    //let suffix = "";
    let age = Number(document.getElementById("age").value);
    
    if (age >= 50){
        message.innerText = "The Terrible";
    }
    else if (age>=20 && age<50 ){
        message.innerText = "The Great";
    }
    else if (age>20){
        message.innerText = "The Lonely";
    }

    
    if (document.getElementById("favanimal").value=="cats");{
        message.innerText= "D.";
    }
    if (document.getElementById("favanimal").value=="dogs");{
        message.innerText = "K.";
    }
    if (document.getElementById("favanimal").value=="fish");{
        message.innerText = "A.";
    }
    if (document.getElementById("favanimal").value=="bird");{
        message.innerText = "B.";
    }
    if (document.getElementById("favanimal").value=="horse");{
        message.innerText = "C.";
    }
    if (document.getElementById("favanimal").value=="frog");{
        message.innerText = "L.";
    }
    if (document.getElementById("favanimal").value=="snake");{
        message.innerText = "M.";
    }
    if (document.getElementById("favanimal").value=="hampster");{
        message.innerText = "Z.";
    }
    if (document.getElementById("favanimal").value=="rabbit");{
        message.innerText = "S.";
    }
    if (document.getElementById("favanimal").value=="ferret");{
        message.innerText = "P.";
    }
    
}