const send = document.getElementById('send');
const firstPage = document.getElementById('first');
const secondPage = document.getElementById('second');

send.addEventListener('click', (e) => {
  let selectedValue = document.querySelector('input[name="avaliation"]:checked').value;
  let showValue = document.getElementById('selected');
  showValue.innerHTML = selectedValue;
  firstPage.classList.toggle('disabled-window');
  secondPage.classList.toggle('disabled-window');
})