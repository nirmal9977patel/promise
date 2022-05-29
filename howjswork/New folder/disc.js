function rolldisc(){
    var d1= Math.floor(Math.random()*6)+1;
    var d2= Math.floor(Math.random()*6)+1;
    var d3=Math.floor(Math.random()*6)+1;

    var disc1= document.getElementById("member1");
    disc1.innerText=d1;
    var disc2=document.getElementById("member2");
    disc2.innerText=d2;
    var disc3=document.getElementById("member3");
    disc3.innerText=d3;

    if(d1>d2&&d2>d3){
        document.querySelector("#winner").innerHTML="winner is member-A";
        disc1.style.backgroundColor= "green";
        disc2.style.backgroundColor="yellow";
        disc3.style.backgroundColor="red";
    }
    else if(d1>d2&&d2<d3&& d1>d3){
        document.querySelector("#winner").innerHTML="winner is member-A";
        disc1.style.backgroundColor= "green";
        disc2.style.backgroundColor="red";
        disc3.style.backgroundColor="yellow";
    }

    else if(d2>d1&&d1>d3){
        document.querySelector("#winner").innerHTML="winner is member-B";
        disc1.style.backgroundColor= "yellow";
        disc2.style.backgroundColor="green";
        disc3.style.backgroundColor="red";
    }
    else if(d2>d1&&d1<d3&&d2>d1){
        document.querySelector("#winner").innerHTML="winner is member-B";
        disc1.style.backgroundColor= "red";
        disc2.style.backgroundColor="green";
        disc3.style.backgroundColor="yellow";
    }
     else if(d3>d2&&d2>d1){
        document.querySelector("#winner").innerHTML="winner is member-C";
        disc1.style.backgroundColor= "red";
        disc2.style.backgroundColor="yellow";
        disc3.style.backgroundColor="green";
    }
    else if(d3>d1&&d1>d2&&d3>d2){
        document.querySelector("#winner").innerHTML="winner is member-C";
        disc1.style.backgroundColor= "yellow";
        disc2.style.backgroundColor="red";
        disc3.style.backgroundColor="green";
    }
    else {
        document.querySelector("#winner").innerHTML="Please Roll the Dice Again";
        disc1.style.backgroundColor="blue";
        disc2.style.backgroundColor="blue";
        disc3.style.backgroundColor="blue";
    }



}
