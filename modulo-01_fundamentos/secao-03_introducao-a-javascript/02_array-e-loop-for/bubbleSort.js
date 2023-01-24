let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

{
    let conferir = numbers.length;
    while (conferir>0){
        for (let i = 0;i < conferir;++i){
            if (numbers[i]>numbers[i+1]){
                let temp = numbers[i+1];
                numbers[i+1] = numbers[i];
                numbers[i] = temp;
            }
        }
        --conferir;
    }
    console.log(numbers);
}

{
    let conferir = numbers.length;
    while (conferir>0){
        for (let i = 0;i < conferir;++i){
            if (numbers[i]<numbers[i+1]){
                let temp = numbers[i+1];
                numbers[i+1] = numbers[i];
                numbers[i] = temp;
            }
        }
        --conferir;
    }
    console.log(numbers);
}

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let i = 0;i < numbers1.length;++i){
    if(i==(numbers1.length-1)){
        numbers2.push(numbers1[i]*2);
        continue;
    }
    numbers2.push(numbers1[i]*numbers1[i+1]);
}

console.log(numbers2);