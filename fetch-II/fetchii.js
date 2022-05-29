const api_key ="d8a01990e9acab2114a0bce7664cb60a"

async function getdata(){
    let city = document.getElementById("city").value;
   
let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        let res=await fetch(url);
        let data= await res.json();
        // append (user.data);
        append(data);
        console.log(data);
     
}
function append(data){
  let container = document.getElementById("container");
  container.innerhtml= null;

      let h3=document.createElement("h3");
      h3.innerText=data.name;

      let p=document.createElement("p");
      p.innerText=`current temp: ${data.main.temp}`;

      let p1=document.createElement("p");
      p1.innerText=`max temp: ${data.main.temp_max}`;

      let p2=document.createElement("p");
      p2.innerText=`min temp: ${data.main.temp_min}`;

      container.append(h3,p,p1,p2);

      let iframe= document.getElementById("gmap_canvas");

      iframe.src =`https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1zJHtkYXRhLm5hbWV9!6i13`
       
  
}
function getLocation
