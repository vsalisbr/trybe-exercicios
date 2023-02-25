const createItem = require('./createItem');

describe('Função createItem', () => {
  it('Cria um item válido?', () => {
    const itemEsperado = {
      name: 'computador',
      quantity: 5,
      unit: 'un',
      price: 3500.49,
    };
    const itemCriado = createItem('computador', 'un', 3500.49, 5);
    expect(itemCriado).toEqual(itemEsperado);
  });

  it('Utiliza zero como quantidade padrão?', () => {
    const itemCriado = createItem('computador', 'un', 3500.49);
    expect(itemCriado).toHaveProperty('quantity', 0);
  });

  it('Lança um erro quando não recebe parâmetros?', () => {
    expect(() => { createItem(); }).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string?', () => {
    expect(() => { createItem(123, 'un', 3500.49, 5); }).toThrow();
  });

  it('Lança um erro se o preço é negativo?', () => {
    expect(() => { createItem('computador', 'un', -3500.49, 5); }).toThrow();
  });

  it('Lança um erro se o preço é zero?', () => {
    expect(() => { createItem('computador', 'un', 0, 5); }).toThrow();
  });
});
