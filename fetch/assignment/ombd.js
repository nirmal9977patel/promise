

async function data(){
   try{
    const url="http://www.omdbapi.com/?i=tt3896198&apikey=4d954201";
    let res= await fetch(url);
    let moviesdata= await res.json();
    console.log(moviesdata);
   }
    catch (err){
        console.log(err);
    }
} 
data()
