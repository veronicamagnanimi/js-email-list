//prelevo elementi dal dom 

const btn = document.getElementById("add-btn");
const eList = document.getElementById("list");


//api

let totalEmail = [];

for (let i = 0; i < 10; i++) {

    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
        console.log(resp);
    })
}





