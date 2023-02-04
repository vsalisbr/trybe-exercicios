const dataTbl = {
  header: [
    {
      text: 'Cor de Fundo'
    },
    {
      text: 'Tamanho da fonte'
    },
    {
      text: 'Espaçamento entre as linhas'
    }
  ]
};
const btns = [
  {
    text: 'white',
    section: 'corDeFundo',
  },
  {
    text: 'black',
    section: 'corDeFundo',
  },
  {
    text: 'green',
    section: 'corDeFundo',
  },
  {
    text: 'blue',
    section: 'corDeFundo',
  },
  {
    text: 'yellow',
    section: 'corDeFundo',
  },
];

const creatTbl = () => {
  const btnsArea = document.querySelector('#btnsArea');
  const table = newTbl();
  table.appendChild(tblHeader());
  btnsArea.appendChild(table);
};

const tblHeader = () => {
  const tblRow = newTblRow();
  for (key of dataTbl.header) {
    let tblH = newTblH();
    tblH.innerHTML = key.text;
    tblRow.appendChild(tblH);
  }
  return tblRow;
};

const tblD = () => {
  const tblD = newTblD();
};

const newTbl = () => document.createElement('table');
const newTblRow = () => document.createElement('tr');
const newTblH = () => document.createElement('th');
const newTblD = () => document.createElement('td');

creatTbl();