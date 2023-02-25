const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
};
const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
};
const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
};

describe('Função encode', () => {
  it('É uma função?', () => {
    expect(typeof encode).toBe('function');
  });

  it('Ao passar os parâmetros a,e,i,o,u o retorno é 1,2,3,4,5?', () => {
    expect('1,2,3,4,5').toBe(encode('a,e,i,o,u'));
  });

  it('Ao passar letras diferentes de a,e,i,o,u o retorno é igual ao que foi enviado?', () => {
    expect('b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,z,k,w,y').toBe(encode('b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,z,k,w,y'));
  });

  it('A quantidade de string devolvida é igual ao que foi enviado?', () => {
    expect(encode('Teste de frase com diferentes letras.')).toHaveLength(37);
  });
});

describe('Função decode', () => {
  it('É uma função?', () => {
    expect(typeof decode).toBe('function');
  });

  it('Ao passar os parâmetros 1,2,3,4,5 o retorno é a,e,i,o,u?', () => {
    expect('a,e,i,o,u').toBe(decode('1,2,3,4,5'));
  });

  it('Ao passar os números diferentes de 1,2,3,4,5 o retorno é igual ao que foi enviado?', () => {
    expect('0,6,7,8,9').toBe(decode('0,6,7,8,9'));
  });

  it('A quantidade de string devolvida é igual ao que foi enviado?', () => {
    expect(decode('T2st2 d2 fr1s2 c4m d3f2r2nt2s l2tr1s.')).toHaveLength(37);
  });
});


