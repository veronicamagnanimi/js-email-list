//prelevo elementi dal dom 

const btn = document.getElementById("add-btn");
const eList = document.getElementById("list");


//api

let totalEmail = [];

//evento sul bottone

btn.addEventListener("click", function() {
    eList.innerHTML = "";

    for (let i = 0; i < 10; i++) {

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
            console.log(resp.data); // restituisce l'intera risposta del server
        
        eList.innerHTML += `<div class="list-group-item list-group-item-action text-center fw-bold">${resp.data.response}</div>`;
    
    
    
    
        })
    }
    

}
)


// for (let i = 0; i < 10; i++) {

//     axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
//         console.log(resp.data); // restituisce l'intera risposta del server
    
//     eList.innerHTML += `<div class="list-group-item list-group-item-action text-center fw-bold">${resp.data.response}</div>`;




//     })
// }







