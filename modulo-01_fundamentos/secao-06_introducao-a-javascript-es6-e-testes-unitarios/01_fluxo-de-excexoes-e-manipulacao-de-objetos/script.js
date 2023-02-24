const isNumber = (value) => !Number.isNaN(parseFloat(value)) && Number.isFinite(value);

const getValue = (element) => {
  const input = document.getElementById(element).value;
  if (input.length <= 0) {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (!isNumber(Number(input))) {
    throw new Error('Informe dois números para realizar a soma');
  }
  return input;
};

function clearInput(element) {
  const input = document.getElementById(element);
  input.value = '';
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `${result}`;
}

function calculateSum() {
  const values = {};
  try {
    values.value1 = getValue('value1');
    values.value2 = getValue('value2');
    const result = Number(values.value1) + Number(values.value2);
    return `Resultado: ${result}`;
  } catch (error) {
    return error.message;
  }
}

function sum() {
  displayResult(calculateSum());
  clearInput('value1');
  clearInput('value2');
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
