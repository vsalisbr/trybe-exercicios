const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it('Testa a propriedade personagem no objeto.', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it('Testa a informação de boas vindas.', () => {
    expect(printMessage(info)).toMatch('Boas vindas');
  });

  it('Testa a informação referente ao nome da personagem.', () => {
    const personagem = info.personagem;
    expect(printMessage(info)).toMatch(personagem);
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it('Testa o fluxo de exceção da função printMessage.', () => {
    const infoSemPersonagem = {
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
    expect(() => { printMessage(infoSemPersonagem) }).toThrow();
  });
});
