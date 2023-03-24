const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const findEmployeeById = (id) => {
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (professionalBoard[i].id === id) {
      return i;
    }
  }
  throw new Error('ID não identificada');
};

const isValideDetail = (detail) => {
  const details = ['id', 'firstName', 'lastName', 'specialities'];
  if (details.indexOf(detail) < 0) {
    throw new Error('Não existe esta propriedade!');
  }
  return true;
};

const propOfEmployee = (employee, detail) => professionalBoard[employee][detail];

const searchEmployee = (id, detail) => {
  isValideDetail(detail);
  const employee = findEmployeeById(id);
  return propOfEmployee(employee, detail);
};

module.exports = searchEmployee;
