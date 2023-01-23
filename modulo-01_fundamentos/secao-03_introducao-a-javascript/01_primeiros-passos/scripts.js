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