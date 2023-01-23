{
    // Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

//     Adição (a + b)
//     Subtração (a - b)
//     Multiplicação (a * b)
//     Divisão (a / b)
//     Módulo (a % b)

    const a = 10;
    const b = 20;
    
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}

{
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados. 

    const a = 20;
    const b = 30;

    if (a>b){
        console.log("a é maior que b");
    } else {
        console.log("b é maior que a");
    }
}

{
    // Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados. 

    const a = 20;
    const b = 30;
    const c = 40;

    if (a>b && a>c){
        console.log("a é maior que b e c");
    } else if (b>c && b>a){
        console.log("b é maior que a e c");
    } else {
        console.log("c é maior que a e b");
    }
}

{
    // Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. 

   let status = 0;
   
    if (status>0){
        console.log("positive");
    } else if (status <0){
        console.log("negative");
    } else {
        console.log("zero");
    }
}

{
    // Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

    // Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

    // Um ângulo será considerado inválido se não tiver um valor positivo.

    const ladoA = 60;
    const ladoB = 60;
    const ladoC = 60;

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
        console.log("erro");
    } else {
        if(ladoA+ladoB+ladoC === 180){
            console.log("triangulo válido");
        } else {
            console.log("triangulo inválido");
        }
    }
}

{
    // Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

    // Porcentagem >= 90 -> A

    // Porcentagem >= 80 -> B

    // Porcentagem >= 70 -> C

    // Porcentagem >= 60 -> D

    // Porcentagem >= 50 -> E

    // Porcentagem < 50 -> F

    // O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

    const nota = 75;
    let conceito = null;

    if (nota >= 90) {
        conceito = "A";
    } else if (nota >= 80) {
        conceito = "B";
    } else if (nota >= 70) {
        conceito = "C";
    } else if (nota >= 60) {
        conceito = "D";
    } else if (nota >= 50) {
        conceito = "E";
    } else {
        conceito = "F";
    }

    console.log(conceito);
}

{
    // Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

    // Bonus: use somente um if.

    const a = 2;
    const b = 4;
    const c = 7;

    if (a%2===0 && b%2===0 && c%2===0){
        console.log("true");
    }  else {
        console.log("false");
    }
}

{
    // Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

    // Bonus: use somente um if.

    const a = 2;
    const b = 4;
    const c = 7;

    if (a%2===0 && b%2===0 && c%2===0){
        console.log("false");
    }  else {
        console.log("true");
    }

}

{
    // Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    // Atente que, sobre o custo do produto, incide um imposto de 20%.

    // Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

    // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    //     valorCustoTotal = valorCusto + impostoSobreOCusto;
    //     lucro = valorVenda - valorCustoTotal (lucro de um produto);
 
    const custo = 100;
    const venda = 189;

    const vendaTotal = venda*1000;
    const custoTotal = (custo*1000)*1.2;
    const lucroTotal = vendaTotal-custoTotal;

    console.log(lucroTotal);
}

{

//     Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

//     A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//         INSS (Instituto Nacional do Seguro Social)

//             Salário bruto até R$ 1.556,94: alíquota de 8%

//             Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

//             Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

//             Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//         IR (Imposto de Renda)

//             Até R$ 1.903,98: isento de imposto de renda

//             De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

//             De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

//             De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

//             Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

//     O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

//     Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

//     Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//         R$ 2.670,00: salário com INSS já deduzido;
//         7.5%: alíquota de imposto de renda;
//         R$ 142,80 parcela a se deduzir do imposto.

//     Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

//     O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

    // FEITO EM ARQUIVO SEPARADO NO INDEX.HTML

}