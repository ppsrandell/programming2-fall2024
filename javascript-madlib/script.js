function generate(){
    //grab the user inputs//
    const a1 = document.getElementById("a1input").value;
    const a2 = document.getElementById("a2input").value;
    const a3 = document.getElementById("a3input").value;
    const a4 = document.getElementById("a4input").value;
    const a5 = document.getElementById("a5input").value;
    const a6 = document.getElementById("a6input").value;
    const a7 = document.getElementById("a7input").value;
    const a8 = document.getElementById("a8input").value;
    const a9 = document.getElementById("a9input").value;
    const a10 = document.getElementById("a10input").value;
    const a11 = document.getElementById("a11input").value;
    const a12 = document.getElementById("a12input").value;
    
    //insert user inputs into the madlib
    document.getElementById("a1").innerText=a1;
    document.getElementById("a2").innerText=a2;
    document.getElementById("a3").innerText=a3;
    document.getElementById("a4").innerText=a4;
    document.getElementById("a5").innerText=a5;
    document.getElementById("a6").innerText=a6;
    document.getElementById("a7").innerText=a7;
    document.getElementById("a8").innerText=a8;
    document.getElementById("a9").innerText=a9;
    document.getElementById("a10").innerText=a10;
    document.getElementById("a11").innerText=a11;
    document.getElementById("a12").innerText=a12;
    
    document.getElementById("madlib").style.display="block";
    document.getElementById("madlibs").style.display="block";
    document.getElementById("madlibs2").style.display="block";
    document.getElementById("madlibs3").style.display="block";
    document.getElementById("madlibs4").style.display="block";
    document.getElementById("madlibs5").style.display="block";
    document.getElementById("madlibend").style.display="block";
    
    document.getElementById("whole").style.backgroundColor="yellow";
}