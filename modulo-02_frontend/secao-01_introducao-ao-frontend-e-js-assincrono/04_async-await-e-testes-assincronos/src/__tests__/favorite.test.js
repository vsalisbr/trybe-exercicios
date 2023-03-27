const { saveFavoriteMagicCard } = require('../magic');
const favoriteCards = require('../data/favoriteCards');

const defaultFavoriteCards = [
  {
    name: 'Ancestor\'s Chosen',
    manaCost: '{5}{W}{W}',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
  },
  {
    name: 'Angel of Mercy',
    manaCost: '{4}{W}',
    types: ['Creature'],
    subtypes: ['Angel'],
    rarity: 'Uncommon',
  },
  {
    name: 'Aven Cloudchaser',
    manaCost: '{3}{W}',
    types: ['Creature'],
    subtypes: ['Bird', 'Soldier'],
    rarity: 'Common',
  },
  {
    name: 'Ballista Squad',
    manaCost: '{3}{W}',
    types: ['Creature'],
    subtypes: ['Human', 'Rebel'],
    rarity: 'Uncommon',
  },
];

const restoreFavoriteCards = () => {
  favoriteCards.splice(0, favoriteCards.length);
  favoriteCards.push(...defaultFavoriteCards);
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4]).toHaveProperty('name');
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  afterEach(restoreFavoriteCards);

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect(favoriteCards).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    const names = favoriteCards.map((card) => card.name);
    const okNames = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(names).toEqual(okNames);
  });
});
