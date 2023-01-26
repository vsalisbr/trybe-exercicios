{
// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo: 

;

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
}

//Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”. 

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

//Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. 

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”. 

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);

//Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”. 

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);

}

{
    //Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 
    let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge',
      };
    for (let key in names){
        console.log(`Olá ${names[key]}`);
    }
}

{
    //Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. 
    let car = {
        model: 'A3 Sedan',
        manufacturer: 'Audi',
        year: 2020
      };
    
    for (let value in car){
        console.log(value, car[value]);
    }
}

{
    // Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

    // Adição (a + b)
    // Subtração (a - b)
    // Multiplicação (a * b)
    // Divisão (a / b)
    // Módulo (a % b)

    function adicao (a,b){
        return a+b;
    }

    function subtracao (a,b){
        return a-b;
    }

    function multiplicacao (a,b){
        return a*b;
    }

    function divisao (a,b){
        return a/b;
    }

    function modulo (a,b){
        return a%b;
    }
}

{
    // Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. 
    const a = 20;
    const b = 30;
    console.log(maiorDeDois(a,b));
    function maiorDeDois(a,b){
        if(a>b){
            return a
        } else {
            return b;
        }        
    }    
}

{
    //Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. 
    const a = 20;
    const b = 30;
    const c = 70;
    console.log(maiorDeTres(a,b,c));
    function maiorDeTres(a,b,c){
        if(a>b && a>c){
            return a
        } else if (b>a && b>c){
            return b;
        } else {
            return c;
        }       
    }   
}

{
    //Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. 
    let status;
    console.log(validaStatus(status));
    function validaStatus(x){
        if(x===true){
            return true;
        } else if (x===false){
            return false;
        } else {
            return "zero";
        }
    }
}

{
    //Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.  
    console.log(trianguloValido(60,60,60));
    function trianguloValido(a,b,c){
        if(!(isNumber(a)&&isNumber(b)&&isNumber(c))){
            return "Informado um lado inválido!";
        }
        if(!(ladoTrianguloValido(a)&&ladoTrianguloValido(b)&&ladoTrianguloValido(c))){
            return "Informado um lado inválido!";
        }
        if(a+b+c===180){
            return true;
        } else {
            return false;
        }
    }
    function ladoTrianguloValido(x){
        if(x<=0||x>=180){
            return false;
        }
        return true;
    }
    function isNumber(x){        
        return (!isNaN(parseFloat(x)) && isFinite(x));
    }
}