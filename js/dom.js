document.getElementById('changeTextBtn').addEventListener('click', function () {
  document.getElementById('changeText').textContent = 'The text was changed using JavaScript!';
});
let backgroundChanged = false;
document.getElementById('backgroundBtn').addEventListener('click', function () {
  backgroundChanged = !backgroundChanged;
  document.getElementById('styleBox').style.backgroundColor = backgroundChanged ? '#bbf7d0' : '#e6edff';
});
let fontSize = 17;
document.getElementById('fontBtn').addEventListener('click', function () {
  fontSize = fontSize >= 29 ? 17 : fontSize + 3;
  document.getElementById('styleBox').style.fontSize = fontSize + 'px';
});
let nextItem = 1;
const list = document.getElementById('itemList');
document.getElementById('addItemBtn').addEventListener('click', function () {
  const item = document.createElement('li');
  item.textContent = 'New item ' + nextItem++;
  list.appendChild(item);
  document.getElementById('listMessage').textContent = 'Item added.';
});
document.getElementById('removeItemBtn').addEventListener('click', function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    document.getElementById('listMessage').textContent = 'Last item removed.';
  } else { document.getElementById('listMessage').textContent = 'The list is already empty.'; }
});
