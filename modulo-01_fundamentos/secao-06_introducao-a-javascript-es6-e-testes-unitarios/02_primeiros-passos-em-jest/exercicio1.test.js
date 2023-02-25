function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

describe('Testa função myRemove', () => {
  it('Função myRemove deve receber um array e um item para remover, seu retorno deve ser um novo array sem o item enviado', () => {
    expect([1, 2, 3, 4, 5]).toEqual(myRemove([1, 2, 3, 4, 5, 6], 6));
  });
});
