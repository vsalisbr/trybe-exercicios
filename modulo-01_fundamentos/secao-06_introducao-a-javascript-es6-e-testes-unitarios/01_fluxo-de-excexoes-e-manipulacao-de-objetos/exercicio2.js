const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function addValue(obj, key, value) {
  obj[key] = value;
}

addValue(lesson2, 'turno', 'noite');


function objKeys(obj) {
  console.log(Object.keys(obj));
}

objKeys(lesson2);

function objLength(obj) {
  console.log(Object.keys(obj).length);
}

objLength(lesson2);

function objValues(obj) {
  console.log(Object.values(obj));
}

objValues(lesson2);

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

console.log(allLessons);

function totalDeEstudantes(obj) {
  let contagem = 0;
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    contagem += obj[keys[i]].numeroEstudantes;
  }
  console.log(contagem);
}

totalDeEstudantes(allLessons);


function getValueByNumber(obj, position) {
  const keys = Object.keys(obj);
  console.log(obj[keys[position]]);
}


getValueByNumber(lesson1, 0);


function verifyPair(obj, key, value) {
  if (obj[key] === value) {
    return true;
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
