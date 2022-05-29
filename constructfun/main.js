// function nikeproduct(n,p,q){
//     this.name=n;
//     this.brand=p; 
//     this.price=q;
//     console.log(this);
// }
// let p1= new nikeproduct("shoes","nike",1000);
// let p2= new nikeproduct("trist","nike", 2000);
var arr= [];
function submitproduct(e){
    
    e.preventdefault();
    let form= document.getElementById("products");
    let name= form.name.value;
    let brand=form.brand.value;
    let price= form.price.value;

    console.log(name, brand, price);
    // arr.push(p);
    // console.log(arr);

}