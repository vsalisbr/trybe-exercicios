// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

//Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

let frutas = {};

for (let fruta of basket) {
    if (frutas[fruta]>0){
        frutas[fruta] += 1;
    } else {
        frutas[fruta] = 1;
    }   
}

let listaDeFrutas = [];

for (let fruta in frutas) {
    listaDeFrutas.push(fruta);
}

let mensagem = "A cesta se encontra vazia.";

for (let i = 0;i < listaDeFrutas.length; ++i){
    let qtdFruta = frutas[listaDeFrutas[i]];
    let nomeFruta = listaDeFrutas[i];
    if (qtdFruta>1){
        nomeFruta += 's';
    }
    if (i == 0) {
        mensagem = `Sua cesta possui: ${qtdFruta} ${nomeFruta}`;
        continue;
    }
    if (i == listaDeFrutas.length-1){
        mensagem += ` e ${qtdFruta} ${nomeFruta}.`;
        continue;
    }
    mensagem += `, ${qtdFruta} ${nomeFruta}`;
}

console.log(mensagem);