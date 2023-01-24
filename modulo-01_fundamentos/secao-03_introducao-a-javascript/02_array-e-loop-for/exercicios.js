// Exercícios - agora, a prática
// Aprofunde seus conhecimentos

//     🚀 Se liga nesse foguete!

//     Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

// Leia atentamente os enunciados e faça o que se pede.
// 🚀 Lidando com Arrays

// Iremos utilizar esse array para realizar os próximos exercícios.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//     Percorra o array imprimindo todos os valores nele contidos com a função console.log();

//     Some todos os valores contidos no array e imprima o resultado;

//     Calcule e imprima a média aritmética dos valores contidos no array;
//         A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

//     Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

//     Utilizando for, descubra qual o maior valor contido no array e imprima-o;

//     Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

//     Utilizando for, descubra qual o menor valor contido no array e imprima-o;

//     Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

//     Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaNumbers = 0;

for (let i = 0;i < numbers.length;++i){
    console.log(numbers[i]);
    somaNumbers += numbers[i];
}

mediaNumbers = somaNumbers/numbers.length;

if (mediaNumbers > 20){
    console.log("maior que 20");
} else {
    console.log('menor que 20');
    
}

let maiorNumero = 0;
for (let i = 0;i < numbers.length;++i){
    if (numbers[i]>maiorNumero){
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero);

let numerosImpares = 0;
for (let i = 0;i < numbers.length;++i){
    if (numbers[i]%2>0){
        ++numerosImpares;
    }
}

if (numerosImpares>0){
    console.log('possuem ' + numerosImpares + ' números ímpares');
} else {
    console.log('não possui numeros impares');
    
}

let menorNumero = 0;
for (let i = 0;i < numbers.length;++i){
    if(i===0){
        menorNumero = numbers[i];
        continue;
    }
    if (numbers[i]<menorNumero){
        menorNumero = numbers[i];
    }
}
console.log(menorNumero);

let novoArray = [];

for (let i = 0;i < 10;++i){
   novoArray.push(Math.floor((Math.random() * 25) + 1));
}

console.log(novoArray);

for (let i = 0; i < novoArray.length; ++i){
    console.log(novoArray[i]/2);
}