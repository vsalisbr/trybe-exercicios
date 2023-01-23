let age = 27;
const myName = "Victor Salis";
const birthCity = "Diamantina";
let birthYear = 1995;

console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

/* */

let movie = "Avengers"; //string literal
let score = 10.89; //number literal
let isValid = true; //boolean
let name1; //undefined
let color = null; //null


/*  */

const base = 5;
const heigth = 8;
const area = base * heigth;

console.log(area);

const perimeter = 2*(base+heigth);

console.log(perimeter);

/* */

if (true) {
    console.log(true);
}

let nota = 61;

if (nota >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Infelizmente, você reprovou.");
}

/** */


mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'

let statusNota = "aprovada";

switch (statusNota){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Informação incorreta");
}