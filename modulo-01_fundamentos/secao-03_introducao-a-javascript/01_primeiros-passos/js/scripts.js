const form = document.querySelector('#input');
const input = document.querySelector('#salarioBruto');

form.addEventListener('submit', function (event){
    event.preventDefault();
    iniciarCalculo();
});

function iniciarCalculo(){
    if(!isNumber()){
        input.value = "";
        alert(`Digite um valor válido! Lembre-se de separar a casa decimal com ponto final e não vírgula, por exemplo 1200.12. Não digite R$.`);
        return false;
    }
    calculaSalarioLiquido();
}

function finalizarCalculo(salarioLiquido){
    input.value = "";
    alert(`Seu salário líquido é: R$ ${salarioLiquido}`);
}

function isNumber(){
    const salarioBrutoDigitado = input.value;
    return (!isNaN(parseFloat(salarioBrutoDigitado)) && isFinite(salarioBrutoDigitado));
}

function calculaSalarioLiquido(){
    const salarioBrutoDigitado = parseFloat(input.value);
    const descontoInss = calculaDescontoInss(salarioBrutoDigitado);
    const salarioBrutoDescontadoInss = salarioBrutoDigitado - descontoInss;
    const descontoIR = calculaDescontoIR(salarioBrutoDescontadoInss);
    const salarioLiquido = salarioBrutoDescontadoInss-descontoIR;
    finalizarCalculo(salarioLiquido);
}

function calculaDescontoInss(salarioBrutoDigitado){
    if (salarioBrutoDigitado <= 1556.94) {
        return salarioBrutoDigitado*0.08;
    } else if (salarioBrutoDigitado <= 2594.92) {
        return salarioBrutoDigitado*0.09;
    } else if (salarioBrutoDigitado <= 5189.82) {
        return salarioBrutoDigitado*0.11;
    } else {
        return 570.88;
    }
}

function calculaDescontoIR(salarioBrutoDescontadoInss){
    if (salarioBrutoDescontadoInss <= 1903.98) {
        return 0;
    } else if (salarioBrutoDescontadoInss <= 2826.65) {
        return ((salarioBrutoDescontadoInss*0.075)-142.80);
    } else if (salarioBrutoDescontadoInss <= 3751.05) {
        return ((salarioBrutoDescontadoInss*0.15)-354.80);
    }  else if (salarioBrutoDescontadoInss <= 4664.68) {
        return ((salarioBrutoDescontadoInss*0.225)-636.13);
    } else {
        return ((salarioBrutoDescontadoInss*0.275)-869.36);
    }
}