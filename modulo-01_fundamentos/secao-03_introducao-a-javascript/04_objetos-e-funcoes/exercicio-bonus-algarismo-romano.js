//(Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const algarismosRomanosValor = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
const algarismosRomanosIndice = ["I", "V", "X", "L", "C", "D", "M"];

console.log(converteRomanoParaInteiro("IVX"));

function validaStringEmNumeroRomano(stringEmRomano){
    try {
        let arrayEmRomano = stringEmRomano.split('');
        for (let i = 0;i < arrayEmRomano.length; ++i) {        
            if (!(algarismosRomanosIndice.indexOf(arrayEmRomano[i])>=0)) { 
                console.log("Número Romano digitado possuí caractere inválido.");    
                return false;
            }
        }
        let indicePrimeiroDigito = algarismosRomanosIndice.indexOf(arrayEmRomano[0]);
        let indiceSegundoDigito = algarismosRomanosIndice.indexOf(arrayEmRomano[1]);
        if (indicePrimeiroDigito > indiceSegundoDigito) {
            for (let i = 0;i < arrayEmRomano.length;++i){
                if (algarismosRomanosIndice.indexOf(arrayEmRomano[i])<algarismosRomanosIndice.indexOf(arrayEmRomano[i+1])){
                    console.log("Número Romano digitado possuí caractere fora de ordem.");    
                    return false; 
                }
            }
        } else {
            for (let i = arrayEmRomano.length-1;i >= 0;--i){
                if (algarismosRomanosIndice.indexOf(arrayEmRomano[i])<algarismosRomanosIndice.indexOf(arrayEmRomano[i-1])){
                    console.log("Número Romano digitado possuí caractere fora de ordem.");    
                    return false; 
                }
            }
        }
        return true;
    } catch (error) {
        console.log("Entrada inválida!");
        return false;
    }
}

function converteRomanoParaInteiro(stringEmRomano){
    if(!validaStringEmNumeroRomano(stringEmRomano)) {       
        return false;
    }
    if (!stringEmRomano.length > 1){
        return algarismosRomanosValor[stringEmRomano];
    }
    let arrayEmRomano = stringEmRomano.split('');
    let indicePrimeiroDigito = algarismosRomanosIndice.indexOf(arrayEmRomano[0]);
    let indiceSegundoDigito = algarismosRomanosIndice.indexOf(arrayEmRomano[1]);
    let valorEmInteiro = 0;
    if (indicePrimeiroDigito > indiceSegundoDigito) {
        for (let i = 0;i < arrayEmRomano.length;++i) {
            valorEmInteiro += algarismosRomanosValor[arrayEmRomano[i]];
        }       
    } else {
        valorEmInteiro = algarismosRomanosValor[arrayEmRomano[arrayEmRomano.length-1]];
        for (let i = arrayEmRomano.length-2;i >= 0;--i) {
            valorEmInteiro -= algarismosRomanosValor[arrayEmRomano[i]];
        }
    }
    return valorEmInteiro;
}