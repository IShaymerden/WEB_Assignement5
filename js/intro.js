// Replace these two values with your own details before submission.
const studentName = 'Your Full Name';
const studentGroup = 'Your Group';
console.log('Student:', studentName);
console.log('Group:', studentGroup);
window.addEventListener('load', function () { alert('Hello, JavaScript World!'); });
document.getElementById('helloBtn').addEventListener('click', function () { alert('Hello, JavaScript World!'); });
function showVariables() {
  let firstName = 'Alex'; // string
  let age = 18; // number
  let isStudent = true; // boolean
  let a = 12, b = 4;
  console.log('String:', firstName, 'Number:', age, 'Boolean:', isStudent);
  console.log('Addition:', a + b);
  console.log('Subtraction:', a - b);
  console.log('Multiplication:', a * b);
  console.log('Division:', a / b);
  console.log('Concatenation:', 'Hello, ' + firstName + '!');
  document.getElementById('introFeedback').textContent = 'Done! Check the browser console (F12).';
}
document.getElementById('operatorsBtn').addEventListener('click', showVariables);
showVariables();
