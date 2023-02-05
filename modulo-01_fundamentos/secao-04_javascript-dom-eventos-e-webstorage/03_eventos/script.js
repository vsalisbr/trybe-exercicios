
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const isHoliday = (day) => {
  const holiday = [24, 25, 31];
  if (holiday.indexOf(day)>=0) {
    return true;
  }
  return false;
};

const isFriday = (day) => {
  const friday = [4, 11, 18, 25];
  if (friday.indexOf(day)>=0) {
    return true;
  }
  return false;
};

const createDays = () => {
  const daysList = document.querySelector('#days');

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = decemberDaysList[i];
    let daysClass = 'day';
    daysClass += isFriday(decemberDaysList[i]) ? ' friday' : '';
    daysClass += isHoliday(decemberDaysList[i]) ? ' holiday' : '';
    dayListItem.className = (daysClass);  
    dayListItem.addEventListener('mouseover', mouseInDay);
    dayListItem.addEventListener('mouseout', mouseOutDay);
    dayListItem.addEventListener('click', colorDay);
    daysList.appendChild(dayListItem);
  }

};

createDays();

const colorHolidays = () => {
  const daysListItems = document.querySelectorAll('.day');
  for (let i = 0; i < daysListItems.length; i += 1) {
    if (isHoliday(parseInt(daysListItems[i].textContent))) {
      if (daysListItems[i].style.backgroundColor !== 'red') {
        daysListItems[i].style.backgroundColor = 'red';
      } else {
        daysListItems[i].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  }
};
const fridays = [];
const alterFridays = () => {
  const daysListItems = document.querySelectorAll('.friday');
  if (daysListItems[0].textContent !== 'Sextou!') {
    for (let i = 0; i < daysListItems.length; i += 1) {
      fridays[i] = daysListItems[i].textContent;
      daysListItems[i].textContent = 'Sextou!';
    }    
  } else {
    for (let i = 0; i < daysListItems.length; i += 1) {
      daysListItems[i].textContent = fridays[i];
    }
  }
};

function mouseInDay(event) {
  event.target.style.fontSize = '30px';
}

function mouseOutDay(event) {
  event.target.style.fontSize = '20px';
}

function loadTasks() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', selectTask);
  }
}

function markOffTask() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].className = 'task';
  } 
}

function selectTask(event) {
  let className = event.target.className;
  className = className == 'task' ? 'task selected' : 'task';
  markOffTask();
  event.target.className = className;
}

function colorOfTaskSelected() {
  for (let i = 0; i < tasks.length; i += 1) {
    let taskClass = tasks[i].className.split(' ');
    if (taskClass.indexOf('selected')>=0) {
      return tasks[i].style.backgroundColor;
    }    
  }
  return 'rgb(119,119,119)';
}

function colorDay(event) {
  if (event.target.style.color === colorOfTaskSelected()) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = colorOfTaskSelected();
  }
}

function valideInputTask() {
  if (inputTask.value.length === 0) {
    alert('teste');
    return false;
  }
  return addEvent();
}

function addEvent() {
  const taskList = document.querySelector('#task-list');
  const newTask = document.createElement('li');
  newTask.innerHTML = inputTask.value;
  taskList.appendChild(newTask);
  inputTask.value = '';
}

const ifEnterAddEvent = (event) => event.which === 13 ? valideInputTask() : false;

const btnHolidays = document.querySelector('#btn-holiday');
btnHolidays.addEventListener('click', colorHolidays);

const btnFridays = document.querySelector('#btn-friday');
btnFridays.addEventListener('click', alterFridays);

const tasks = document.querySelectorAll('.task');
loadTasks();

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', valideInputTask);

const inputTask = document.querySelector('#task-input');
inputTask.addEventListener('keypress', ifEnterAddEvent);

inputTask.value = '';