function submit(event){
    event.preventDefault();
    let form = document.getElementById("data");
    let name = form.name.value;
    let coures= form.coures.value;
    let unit= form.unit.value;
    let img=form.img.value;
    let batch=form.batch.value;

    console.log(name,coures,unit,img,batch);
}