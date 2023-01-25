{
    // Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: 
    let quantidade = Math.floor((Math.random() * 10))+1;
    let impressao = "";

    for (let i=0;i<quantidade;++i){
        impressao += "*";
    }

    for (let i=0;i<quantidade;++i){
        console.log(impressao);
    }
}

{
    //Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

    let quantidade = Math.floor((Math.random() * 10))+1;
    for(let i=1;i<=quantidade;++i){
        let impressao = "";
        for(let y=1;y<=i;++y){
            impressao += "*";
        }
        console.log(impressao);
    }

}

{
    //Agora inverta o lado do triângulo. Por exemplo: 

    let qtdLinhas = Math.floor((Math.random() * 10))+1;
    for(let i=1;i<=qtdLinhas;++i){
        let impressao = "";
        let qtdEspacosBrancos = qtdLinhas-i;
        let qtdEspacosPreenchidos = qtdLinhas-qtdEspacosBrancos;
        for (let y=1;y<=qtdEspacosBrancos;y++){
            impressao +=" ";
        }
        for (let z=1;z<=qtdEspacosPreenchidos;z++){
            impressao +="*";
        }
        console.log(impressao);
    }
}

{
    //Depois, faça uma pirâmide com n asteriscos de base: 

    let qtdLinhas = Math.floor((Math.random() * 15))+1;;
    if (qtdLinhas%2==0){
        qtdLinhas -= 1;
    }
    for (let i=1;i<=qtdLinhas;++i){
        let impressao = "";
        let qtdEspacosBrancos = qtdLinhas-i;
        if(qtdEspacosBrancos%2!==0){
            continue;
        }
        for (let y=1;y<=(qtdEspacosBrancos/2);++y){
            impressao += " ";
        }
        for (let z=1;z<=i;++z){
            impressao += "*";
        }
        for (let w=1;w<=(qtdEspacosBrancos/2);++w){
            impressao += " ";
        }
        console.log(impressao);      
    }
}

{
    //Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: 

}