function generate(){
    let message = document.getElementById("newname");
    message.innerText = "";
    
    let initial="";
    
    if (document.getElementById("favanimal").value=="cats"){
        initial = "D.";
        message.innerText = "D.";
    }
    if (document.getElementById("favanimal").value=="dogs"){
        initial = "K.";
        message.innerText = "K.";
    }
    if (document.getElementById("favanimal").value=="fish"){
        initial = "A.";
        message.innerText = "A.";
    }
    if (document.getElementById("favanimal").value=="bird"){
        initial = "B.";
        message.innerText = "B.";
    }
    if (document.getElementById("favanimal").value=="horse"){
        initial = "C.";
        message.innerText = "C.";
    }
    if (document.getElementById("favanimal").value=="frog"){
        initial = "L.";
        message.innerText = "L.";
    }
    if (document.getElementById("favanimal").value=="snake"){
        initial = "M.";
        message.innerText = "M.";
    }
    if (document.getElementById("favanimal").value=="hampster"){
        initial = "Z.";
        message.innerText = "Z.";
    }
    if (document.getElementById("favanimal").value=="rabbit"){
        initial = "S.";
        message.innerText = "S.";
    }
    if (document.getElementById("favanimal").value=="ferret"){
        initial = "P.";
        message.innerText = "P.";
    }
    
    let lastname = "";
    
    if (document.getElementById("month").value=="january"){
        lastname = " Sunset";
        message.innerText += " Sunset";
    }
    if (document.getElementById("month").value=="febuary"){
        lastname = " Spur-Spikes";
        message.innerText += " Spur-Spikes";
    }
    if (document.getElementById("month").value=="march"){
        lastname = " Mosey-Moore";
        message.innerText += " Mosey-Moore";
    }
    if (document.getElementById("month").value=="april"){
        lastname = " Caboodle";
        message.innerText += " Caboodle";
    }
    if (document.getElementById("month").value=="may"){
        lastname = " Barns";
        message.innerText += " Barns";
    }
    if (document.getElementById("month").value=="june"){
        lastname = " Barn-Sour";
        message.innerText += " Barn-Sour";
    }
    if (document.getElementById("month").value=="july"){
        lastname = " Gulch-Water";
        message.innerText += " Gulch-Water";
    }
    if (document.getElementById("month").value=="august"){
        lastname = " Gitty-Up";
        message.innerText += " Gitty-Up";
    }
    if (document.getElementById("month").value=="september"){
        lastname = " Tumbleweed";
        message.innerText += " Tumbleweed";
    }
    if (document.getElementById("month").value=="october"){
        lastname = " Lone-Star";
        message.innerText += " Lone-Star";
    }
    if (document.getElementById("month").value=="november"){
        lastname = " Bee-Bonnet";
        message.innerText += " Bee-Bonnet";
    }
    if (document.getElementById("month").value=="december"){
        lastname = " Cahoots";
        message.innerText += " Cahoots";
    }
    
    let suffix = "";
    let age = Number(document.getElementById("age").value);
    
    if (age >= 75){
        suffix = " The Terrible";
        message.innerText += " The Terrible";
    }
    else if (age>=20 && age<75 ){
        suffix = " The Great";
        message.innerText += " The Great";
    }
    else if (age<20){
        suffix = " The Lonely";
        message.innerText += " The Lonely";
    }
    
}