window.onload = () => {
  if (!localStorage.cfg) {
    setCfg();
  } else {
    getCfg();
  }
  applyCfg();
};

let cfgObj = {
  cfgVersion: 0.4,
  backgroundColor: 'white',
  fontColor: 'black',
  fontSize: '10',
  lineSize: '1',
  font: 'Arial',
};

const dataTbl = [
  {
    header: 'Cor de Fundo',
    onClick: setBackgroundColor,
    data: [
      {
        text: 'white',
      },
      {
        text: 'black',
      },
      {
        text: 'green',
      },
      {
        text: 'blue',
      },
      {
        text: 'yellow',
      },
    ]
  },
  {
    header: 'Cor da fonte',
    onClick: setFontColor,
    data: [
      {
        text: 'black'
      },
      {
        text: 'red'
      },
      {
        text: 'white'
      }
    ]
  },
  {
    header: 'Tamanho da fonte',
    onClick: setFontSize,
    data: [
      {
        text: '8pt'
      },
      {
        text: '10pt'
      },
      {
        text: '12pt'
      },
      {
        text: '14pt'
      },
      {
        text: '20pt'
      }
    ]
  },
  {
    header: 'Espaçamento entre as linhas',
    onClick: setLineSize,
    data: [
      {
        text: '1.0'
      },
      {
        text: 'normal'
      },
      {
        text: '1.5'
      },
      {
        text: '2.0'
      },
      {
        text: '3.0'
      }
    ]
  },
  {
    header: 'Tipo da fonte',
    onClick: setFont,
    data: [
      {
        text: 'Arial'
      },
      {
        text: 'Times New Roman'
      }
    ]
  }
];

const creatTbl = () => {
  const btnsArea = document.querySelector('#btnsArea');
  const table = newTbl();
  table.appendChild(tblHeader());
  const tblD = tblData();
  for (let i = 0; i < tblD.length; i += 1) {
    table.appendChild(tblD[i]);
  }
  btnsArea.appendChild(table);
};

const tblHeader = () => {
  const tblRow = newTblRow();
  for (let i = 0; i < dataTbl.length; i += 1) {
    const tblH = newTblH();
    tblH.innerHTML = dataTbl[i].header;
    tblRow.appendChild(tblH);
  }
  return tblRow;
};

const tblRows = () => {
  const rows = [[], 0];
  for (let i = 0; i < dataTbl.length; i += 1) {
    const data = dataTbl[i].data;
    rows[1] = data.length > rows[1] ? data.length : rows[1];
  }
  for (let i = 0; i < rows[1]; i += 1) {
    const tblRow = newTblRow();
    rows[0].push(tblRow);
  }
  return rows;
};

const tblData = () => {
  const arrayRows = tblRows();
  const rows = arrayRows[0];
  let numberOfLines = arrayRows[1];
  for (let i = 0; i < dataTbl.length; i += 1) {
    const data = dataTbl[i].data;
    for (let y = 0; y < numberOfLines; y+= 1) {
      const tblRow = rows[y];
      const tblD = newTblD();      
      if (data[y]){
        const btn = newBtn();
        btn.innerHTML = data[y].text;
        if (dataTbl[i].onClick) {
          btn.addEventListener('click', dataTbl[i].onClick);
        }        
        tblD.appendChild(btn);
      } else {
        tblD.innerHTML = '';
      }      
      tblRow.appendChild(tblD);
      rows[y] = tblRow;
    }
  }
  return rows;
};

const newTbl = () => document.createElement('table');
const newTblRow = () => document.createElement('tr');
const newTblH = () => document.createElement('th');
const newTblD = () => document.createElement('td');
const newBtn = () => document.createElement('button');

creatTbl();

function setBackgroundColor (event) {
  cfgObj.backgroundColor = event.target.textContent;
  setCfg();
}

function setFontColor (event) {
  cfgObj.fontColor = event.target.textContent;
  setCfg();
}

function setFontSize (event) {
  cfgObj.fontSize = parseInt(event.target.textContent);
  setCfg();
}

function setLineSize (event) {
  cfgObj.lineSize = event.target.textContent;
  setCfg();
}

function setFont(event) {
  cfgObj.font = event.target.textContent;
  setCfg();
}

function setCfg() {
  localStorage.cfg = JSON.stringify(cfgObj);
  applyCfg();
}

function getCfg() {
  const cfgLocalStorage = JSON.parse(localStorage.cfg);
  if (parseFloat(cfgLocalStorage.cfgVersion) < parseFloat(cfgObj.cfgVersion)) {
    localStorage.clear();
    location.reload();
  }
  cfgObj = cfgLocalStorage;
}

function applyCfg() {
  const body = document.getElementById('body');
  const main = document.getElementById('main');
  body.style.backgroundColor = cfgObj.backgroundColor;
  for (key of main.children) {
    key.style.color = cfgObj.fontColor;
    key.style.fontSize = `${cfgObj.fontSize}pt`;
    key.style.lineHeight = `${cfgObj.lineSize}`;
    key.style.fontFamily = `${cfgObj.font}`;
  }  
}