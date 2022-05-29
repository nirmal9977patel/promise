// let x=fetch();
// console.log(x);
// const url="https://reqres.in/api/users";

// fetch(url)
// .then(function (res){
//     return res.json();
// })
// .then(function (res){
//     console.log(res);
// })
// .catch(function (err){
//     console.log(err);
// });

// async function getdata(){
//     try{
//     let res=await fetch(url);
//     let user= await res.json();
//     // append (user.data);
//     console.log(user.data);
//   }
//   catch (err){
//       console.log(err);
//   }
// }
// getdata();

// function append(data){
//     data.array.forEach(function (el){
//         let img=document.createElement("img");
//         img.src=el.avatar;

//         let h2= document.createElement("h2");
//         h2.innerText=el.first_name;

//         let p= document.createElement("p");
//         p.innerText=el.email;

//         let div=document.createElement("div");
//         div.append(img,h2,p);

//         container.append(div);
//     }) ;
//  }

const url = "https://fakestoreapi.com/products";

async function getData(){
    try{
        let res= await fetch(url);
        let products= await res.json();
        append(products);
        console.log(products);
    }
    catch (err){
        console.log(err);
    }
}
getData()

function append(data){
        data.forEach(function (el){
            let h3=document.createElement("h3");
            h3.innerText=el.title;
    
            let h4= document.createElement("h4");
            h4.innerText=el.price;
    
            let p= document.createElement("p");
            p.innerText=el.description;

            let h= document.createElement("h4");
            h.innerText=el.category;
    
            let div=document.createElement("div");
            div.append(h3,h4,p,h);
    
            container.append(div);
        }) ;
     }
