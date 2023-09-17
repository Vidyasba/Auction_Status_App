const url="https://gauravgitacc.github.io/postAppData/auctionData.json";

let prom=fetch(url);

// prom.then((response)=>{
//     console.log(response);
//     const data=response.json();
//     data.then((serverData)=>{
//         console.log(serverData);
//     });
// })

async function fetchData(){
    try{
        const response=await fetch(url);
        const result=await response.json();
        renderData(result);
    }
    catch(error){
        console.log({error})
    }
}
function renderData(data){
    console.log(data);
}
fetchData();


//find no of seconds 
const instance1= new Date(2021,1,10,15,30,0,0);
console.log(instance1);
const instance2=new Date(2023,7,29,20,0,0);
console.log(instance2);
console.log("time is");
console.log((instance2.getTime()-instance1.getTime())/1000);



