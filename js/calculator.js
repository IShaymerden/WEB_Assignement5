function calculate(operation) {
  const input1 = document.getElementById('number1').value;
  const input2 = document.getElementById('number2').value;
  const display = document.getElementById('calcResult');
  display.classList.remove('error');
  if (input1.trim() === '' || input2.trim() === '') {
    display.textContent = 'Please enter both numbers.'; display.classList.add('error'); return;
  }
  const a = Number(input1);
  const b = Number(input2);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    display.textContent = 'Please enter valid numbers.'; display.classList.add('error'); return;
  }
  let result;
  if (operation === 'add') result = a + b;
  else if (operation === 'subtract') result = a - b;
  else if (operation === 'multiply') result = a * b;
  else if (operation === 'divide') {
    if (b === 0) { display.textContent = 'Cannot divide by zero.'; display.classList.add('error'); return; }
    result = a / b;
  }
  display.textContent = String(Number(result.toPrecision(12)));
}
document.querySelectorAll('[data-operation]').forEach(function (button) {
  button.addEventListener('click', function () { calculate(button.dataset.operation); });
});
