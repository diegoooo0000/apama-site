
const dados = {

sub7:{
jogos:[
"APAMA x Blumenau Futsal — 10/06",
"APAMA x Indaial — 15/06"
],
jogadores:[
{nome:"Arthur",posicao:"Ala"},
{nome:"Pedro",posicao:"Fixo"}
]
},

sub9:{
jogos:[
"APAMA x Jaraguá — 12/06",
"APAMA x Joinville — 18/06"
],
jogadores:[
{nome:"Lucas",posicao:"Ala"},
{nome:"Gabriel",posicao:"Pivô"}
]
},

sub11:{
jogos:[
"APAMA x Brusque — 08/06",
"APAMA x Timbó — 14/06"
],
jogadores:[
{nome:"Mateus",posicao:"Fixo"},
{nome:"Rafael",posicao:"Goleiro"}
]
},

sub13:{
jogos:[
"APAMA x Joinville — 10/06",
"APAMA x Criciúma — 20/06"
],
jogadores:[
{nome:"Bruno",posicao:"Ala"},
{nome:"Diego",posicao:"Pivô"}
]
},

sub15:{
jogos:[
"APAMA x Jaraguá — 11/06",
"APAMA x Chapecó — 22/06"
],
jogadores:[
{nome:"João",posicao:"Ala"},
{nome:"Henrique",posicao:"Fixo"}
]
},

sub17:{
jogos:[
"APAMA x Joinville — 09/06",
"APAMA x Blumenau — 19/06"
],
jogadores:[
{nome:"Carlos",posicao:"Pivô"},
{nome:"Leonardo",posicao:"Goleiro"}
]
}

}



function mudarCategoria(cat){

document.getElementById("tituloCategoria").innerText =
"Categoria " + cat.toUpperCase()

const jogosDiv = document.getElementById("jogosContainer")

const jogadoresDiv = document.getElementById("jogadores")

jogosDiv.innerHTML=""
jogadoresDiv.innerHTML=""

dados[cat].jogos.forEach(jogo=>{

jogosDiv.innerHTML +=
`<div class="game-card">${jogo}</div>`

})


dados[cat].jogadores.forEach(j=>{

jogadoresDiv.innerHTML +=

`<div class="player">
<h3>${j.nome}</h3>
<p>Posição: ${j.posicao}</p>
</div>`

})

}
