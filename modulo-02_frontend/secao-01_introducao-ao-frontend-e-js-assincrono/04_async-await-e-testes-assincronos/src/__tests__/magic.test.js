const { getMagicCard } = require('../magic');

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    await getMagicCard('130550');
    expect(fetch).toBeCalled();
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    await getMagicCard('130550');
    expect(fetch).toBeCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    const response = await getMagicCard('130550');
    const { name } = response;
    expect(name).toBe('Ancestor\'s Chosen');
  });
});
