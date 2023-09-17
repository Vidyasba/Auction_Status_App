const url="https://gauravgitacc.github.io/postAppData/auctionData.json";

const container=document.getElementById("container");
//fetch function resturn promise
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
    //DOM manipulation after getting data
    console.log(data);
    //  <div class="card">
//     <div class="top">
//     <div class="left">
//         <span class="badge">PENDING</span>
//         <span class="case-number">123FG45</span>
//     </div>
//     <div class="right">
//         <span class="date">MAR 23 2023 8:50 AM</span>
//     </div>
// </div>
// <div class="bottom">
//     <div class="from-location">Banglore Whitefiled Airport</div>
//     <div class="to-location">HSR Layout</div>
//     <div class="to-location">₹ 389</div>
// </div>
// </div>
    // {
    //     "status": "PENDING",
    //     "caseNumber": "S230IS9230",
    //     "date": "Mar 24, 2023, 5:10:24 PM",
    //     "fromLocation": "MG Road Metro Station",
    //     "toLocation": "Kodihalli, Bengaluru, Karnataka, India",
    //     "fare": "₹ 200"
    //   }

    data.forEach((card)=>{
        const cardContainer =document.createElement('div');
        cardContainer.className="card";
        cardContainer.innerHTML=`
        <div class="top">
                <div class="left">
                     <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                    <span class="case-number">${card.caseNumber}</span>
                 </div>
                <div class="right">
                     <span class="date">${card.date}</span>
                </div>
        </div>
        <div class="bottom">
                <div class="from-location">${card.fromLocation}</div>
                <div class="to-location">${card.toLocation}</div>
                <div class="to-location">${card.fare}</div>
        </div>
        `
        container.appendChild(cardContainer);
    })
}
fetchData();


//find no of seconds 
const instance1= new Date(2021,1,10,15,30,0,0);
console.log(instance1);
const instance2=new Date(2023,7,29,20,0,0);
console.log(instance2);
console.log("time is");
console.log((instance2.getTime()-instance1.getTime())/1000);



