const btnSubmit = document.getElementById('submit-btn');
const cbAgreement = document.getElementById('agreement');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
});

cbAgreement.addEventListener('change', (event) => {
  const agreement = event.target.checked;
  btnSubmit.disabled = !agreement;
});
