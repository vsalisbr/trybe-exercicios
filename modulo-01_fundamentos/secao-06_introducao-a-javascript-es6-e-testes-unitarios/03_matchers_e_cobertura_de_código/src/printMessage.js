let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (typeof characterInfo !== 'object' || !characterInfo.personagem) {
    throw new Error('Parâmetro de entrada incorreto!');
  }

  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

console.log(printMessage(info));

module.exports = { info, printMessage };
