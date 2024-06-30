/* formula do dano level = 50 
((((2*50/7)*atstat*atqpower/def)/50)+2*stab*fraqueza*resistencia*critico
se quiser facilitar atstat + atpower - def *stab*fraqueza*resistencia
*/
let resposta='s'
//seus atributos
let nome = prompt('Qual o nome do seu pokemon')
let hp = prompt('Qual o hp do seu pokemon')
let at = prompt('Qual o ataque fisico do seu pokemon')
let def = prompt('QUal a def do seu pokemon')
let atSp = prompt('qual o ataque especial do seu pokemon')
let spe = prompt('Qual a velocidade do seu pokemon')
let golpe1Nome = prompt('Qual o nome do golpe 1')
let golpe1Poder = prompt('Qual o poder do golpe 1')
//atributos do oponente
nomeIni = prompt('Qual o nome do pokemon do oponente')
hpIni = prompt('Qual o hp do pokemon do oponente')
atIni = prompt('Qual o ataque fisico do pokemon do oponente')
defIni = prompt('QUal a def do pokemon do oponente')
atSpIni = prompt('qual o ataque especial do pokemon do oponente')
speIni = prompt('Qual a velocidade do pokemon do oponente')

while(resposta = 's'){
    //calculo de dano
    let dano = 0
    dano = at + golpe1Poder - defIni
    hpIni = hpIni - dano
    if(hpIni <= 0){
        alert('Parabens! você ganhou')
        break;
    }
}
