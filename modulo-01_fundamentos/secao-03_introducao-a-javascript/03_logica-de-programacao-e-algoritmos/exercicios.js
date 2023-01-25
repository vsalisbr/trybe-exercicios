{
   // crie um algoritmo que imprima na tela o fatorial de 10.
   console.log(factorial(10)); 

    function factorial(x){
        if (!isNumber(x)||x<0){
            return 0;
        }
        if (x===0||x===1){
            return 1;
        }
        let result = x;
        for (let i=(x-1);i>0;--i){
            result = result*i;
        }
        return result;
    }

    function isNumber(x){        
        return (!isNaN(parseFloat(x)) && isFinite(x));
    }
}

{
    // Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

    console.log(reverse("Trybe"));
    function reverse(x){
        if(!x||isNumber(x)){
            return "Entrada inválida";
        }
        if(x.length===1){
            return x;
        }
        let y="";
        for (let i=x.length-1;i>=0;--i){
            y += x[i];
        }
        return y;
    }
    function isNumber(x){        
        return (!isNaN(parseFloat(x)) && isFinite(x));
    }
}

{
    // Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra. 
    let array = ['java', 'javascript', 'python', 'html', 'css'];
    let maiorPalavra="";
    let menorPalavra="";

    for (let i=0;i<array.length;++i){
        if(i===0){
            maiorPalavra=array[i];
            menorPalavra=array[i];
            continue;
        }
        if(array[i].length<menorPalavra.length){
            menorPalavra = array[i];
        }
        if(array[i].length>maiorPalavra.length){
            maiorPalavra = array[i];
        }
    }

    console.log(menorPalavra,maiorPalavra);
}

{
    //Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. 
    let numerosPrimos = [];

    for (let i=2;i<=50;++i){
        let numeroPrimo = true;
        for(let y=2;y<i;++y){
            if(i%y==0){
                numeroPrimo = false;
                continue;
            }
        }
        if(numeroPrimo){
            numerosPrimos.push(i);
        }
    }

    let maiorNumero = numerosPrimos[0];
    for (let i=0;i<numerosPrimos.length;++i){
        if (numerosPrimos[i]>maiorNumero){
            maiorNumero = numerosPrimos[i];
        }
    }
    console.log(maiorNumero);
}