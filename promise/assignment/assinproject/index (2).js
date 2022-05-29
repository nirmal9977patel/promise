
var obj = {
    Fried_Rice:"https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2015/04/IMG_1755-2.jpg",
    Burger:"https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_masthead_xtkxft",
    Momos: "https://th.bing.com/th/id/OIP.W_vYhH5VOqc1wDbKmM15YQHaEo?pid=ImgDet&rs=1",
    Pizza:"https://img3.mashed.com/img/gallery/you-should-never-fold-pizza-slices-heres-why/l-intro-1602105889.jpg",
    Coca_Cola :"https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/114/2017/07/27152836/shutterstock_193222433.jpg",
    Ice:"https://b.zmtcdn.com/data/pictures/chains/0/800910/acfe0626c6e4f2ac89d41b1d5ff461db_o2_featured_v2.jpg?output-format=webp",
    Roti:"https://b.zmtcdn.com/data/pictures/chains/4/800424/b55b1bb8a4ed117708e384ce934b3ac0_o2_featured_v2.jpg",
}


document.getElementById("submit").addEventListener("click",function(e){
    
    document.getElementById("show_food").innerHTML = "";

    e.preventDefault();
    let check = document.querySelectorAll('input[type = "checkbox"]:checked');

    let val =[];
    check.forEach(function(item){
        val.push(item.value)
    })
    for(let i=0;i<val.length;i++){
        order(val[i])
    }

})

function order(food){
    let status = "open";
    let promise = new Promise(function(resolve,reject){
        let time = Math.round(Math.random() * 5000);
        var h3 = document.createElement("h3");
        h3.innerHTML = `Please Wait ${Math.ceil(time/1000)}'s to ready your ${food}`;
        document.getElementById("show_time").append(h3);
        if(status =="closed"){
            reject("Sorry, shop are closed");
        }
        else{
            setTimeout(function (){
                resolve("Your order for "+food+" is ready");
               
            },time)
        }
    })

    promise.then(function(message){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = obj[food];
        div.append(img);
        document.getElementById("show_food").append(div);
        document.getElementById("show_time").innerText = "";
        document.getElementById("form").reset();
        
    }).catch(function(message){
       alert(message);
    })

    document.getElementById("show_food").innerHTML = "";
    }

