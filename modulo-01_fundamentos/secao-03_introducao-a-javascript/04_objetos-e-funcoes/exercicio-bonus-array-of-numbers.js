// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

let numerosPares = [];
for (let keyX in vector){
    
    for (let keyY in vector[keyX]){
        if (vector[keyX][keyY]%2==0){
            numerosPares.push(vector[keyX][keyY]);
        }
    }   
}
console.log(numerosPares);