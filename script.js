const gombok = document.getElementById("gombok")
const kijelzo = document.getElementById("kijelzo")
const udito_tarolo = document.getElementById("uditok")


for (let i = 9; i >= 0; i--){
gombok.innerHTML += '<button onclick="numberPressed('+i+')">'+i+'</button>'
}
gombok.innerHTML += '<button id="clearbtn" onclick="clearPressed()">C</button>'
gombok.innerHTML += '<button id="kiad" onclick= "giveMe()">Kiad</button>'

function numberPressed(num){
    kijelzo.innerHTML += num
}

function clearPressed(){
    kijelzo.innerHTML = ""
}

let uditok = [
    {nev: "Apenta", kep: "apenta.jpg", ar: 220, kod: 55 },
    {nev: "CocaCola", kep: "cocacola.png", ar: 280, kod: 48 },           
    {nev: "Hell kávé", kep: "hellkave.jpg", ar: 330, kod: 35 },
    {nev: "Kinley", kep: "kinley.jpg", ar: 280, kod: 23 },
    {nev: "Marka", kep: "marka.jpg", ar: 230, kod: 19  },
]

for (let i = 0; i< uditok.length; i++){
    udito_tarolo.innerHTML += `<div class="udito">
    <img src="${uditok[i].kep}">
    <h2>${uditok[i].nev} (${uditok[i].kod})</h2>
    <h3>${uditok[i].ar} Ft</h3>
</div>`
} 

function giveMe()
{
    let kod= kijelzo.innerHTML
    alert(kod);

    for(let i = 0; i< uditok.length; i++){}}