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