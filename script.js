
const dados = {

sub9:{
jogos:[
"APAMA x APEF Blumenau",
"APAMA x Spaca Blu",
"APAMA x Nova Geração Timbó"
],
jogadores:[
{nome:"Arthur Mariani",posicao:"Ala"},
{nome:"Bernardo Costa",posicao:"Fixo"},
{nome:"Bruno Franceschi",posicao:"Pivô"}
]
},

sub11:{
jogos:[
"APAMA x Cocal do Sul",
"APAMA x Spaca Blu"
],
jogadores:[
{nome:"Pedro Rossa",posicao:"Ala"},
{nome:"Gabriel",posicao:"Goleiro"}
]
},

sub13:{
jogos:[
"APAMA x Bugre do Oeste",
"APAMA x Marista"
],
jogadores:[
{nome:"Lucas",posicao:"Ala"},
{nome:"Mateus",posicao:"Fixo"}
]
}

}


function mudarCategoria(cat){

document.getElementById("tituloCategoria").innerText =
"Jogos - " + cat.toUpperCase()

const jogosDiv = document.getElementById("listaJogos")
const jogadoresDiv = document.getElementById("listaJogadores")

jogosDiv.innerHTML=""
jogadoresDiv.innerHTML=""

dados[cat].jogos.forEach(jogo=>{

jogosDiv.innerHTML += `<div class="jogo-card">${jogo}</div>`

})

dados[cat].jogadores.forEach(j=>{

jogadoresDiv.innerHTML +=

`<div class="player">
<h3>${j.nome}</h3>
<p>${j.posicao}</p>
</div>`

})

}


function scrollJogos(){

document.getElementById("jogos").scrollIntoView({
behavior:"smooth"
})

}
