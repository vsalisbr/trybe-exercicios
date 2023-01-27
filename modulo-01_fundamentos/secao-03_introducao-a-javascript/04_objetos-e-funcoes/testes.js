let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas){
    console.log(pizzas[key]);
}

let pizzasDoces = ["chocolate","nutela","banana"];

for (let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

{
    let palavras = ["teste0", "teste1", "teste2", "teste3", "teste4", "teste5", "teste6"];
    for (let i=0;i<palavras.length;++i){
        if (i==5){
            palavras[i]+='?';
            continue;
        }
        palavras[i] +='!';
    }
    console.log(palavras);
}