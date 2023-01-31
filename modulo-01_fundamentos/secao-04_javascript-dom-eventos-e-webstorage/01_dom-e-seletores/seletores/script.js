document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementById('footer-container').style.backgroundColor = 'green';
let emergencyTasksDivs = document.querySelectorAll('.emergency-tasks div');
let emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
let noEmergencyTasksDivs = document.querySelectorAll('.no-emergency-tasks div');
let noEmergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');

for (let div of emergencyTasksDivs) {
  div.style.backgroundColor = 'orange';
}

for (let div of emergencyTasksHeader) {
  div.style.backgroundColor = 'black';
}

for (let div of noEmergencyTasksDivs) {
  div.style.backgroundColor = 'yellow';
}

for (let div of noEmergencyTasksHeader) {
  div.style.backgroundColor = 'black';
}