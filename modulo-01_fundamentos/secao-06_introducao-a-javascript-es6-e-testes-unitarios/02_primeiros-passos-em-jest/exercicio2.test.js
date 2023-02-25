function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Testa função myFizzBuzz', () => {
  it('Ao informar número divisível por 3 e 5 o retorno deve ser "fizzbuzz"', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });

  it('Ao informar número divisível por 3 e que não seja divisível por 5 o retorno deve ser "fizz"', () => {
    expect('fizz').toBe(myFizzBuzz(6));
  });

  it('Ao informar número divisível por 5 e que não seja divisível por 3 o retorno deve ser "fizz"', () => {
    expect('buzz').toBe(myFizzBuzz(20));
  });

  it('Ao informar número que não seja divisível por 5 e 3 o retorno deve ser o próprio número', () => {
    expect(17).toBe(myFizzBuzz(17));
  });

  it('Ao informar um parâmetro que não seja um número, o retorno deve ser "false"', () => {
    expect(false).toBe(myFizzBuzz('23'));
  });
});
