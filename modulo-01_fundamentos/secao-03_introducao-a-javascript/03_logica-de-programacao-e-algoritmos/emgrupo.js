// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

{
    let soma = 0;
    for (let index=1;index<=50;index+=1){
        soma += index;
    }
    console.log('A soma total de 1 a 50 é: '+soma);
}

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

{
    let contagem = 0;
    for(let index=2;index<=150;index+=1){
        if(index%3===0){
            contagem += 1;
        }
    }
    if(contagem==50){
        console.log('mensagem secreta');    
    }
}


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let opcoes = ["pedra","papel", "tesoura"];

let player1 = opcoes[Math.floor((Math.random() * 2))];
let player2 = opcoes[Math.floor((Math.random() * 2))];

console.log(`Player 1 jogou ${player1} Player 2 jogou ${player2}`);

if (player1 == "pedra"){
    if (player2 == "tesoura"){
        console.log('Player 1 won');        
    } else if (player2 == "papel") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

if (player1 == "papel"){
    if (player2 == "pedra"){
        console.log('Player 1 won');        
    } else if (player2 == "tesoura") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

if (player1 == "tesoura"){
    if (player2 == "papel"){
        console.log('Player 1 won');        
    } else if (player2 == "pedra") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

//4 -
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 18;

let maiorDeIdade = idade>=18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa não é maior de idade");

;

//5 - 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idades = [30,25,45];
let menorIdade = 0;
for (let index = 0; index < idades.length;index+=1){
    if(index==0){
        menorIdade = idades[index];
        continue;
    }
    if(idades[index]<menorIdade){
        menorIdade=idades[index];
    }
}
console.log(menorIdade);