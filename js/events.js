const box = document.getElementById('hoverBox');
box.addEventListener('mouseover', function () { box.classList.add('hovered'); box.textContent = 'Mouse over!'; });
box.addEventListener('mouseout', function () { box.classList.remove('hovered'); box.textContent = 'Hover over me!'; });
document.getElementById('keyboardInput').addEventListener('keyup', function (event) {
  document.getElementById('liveText').textContent = event.target.value || '(empty)';
});
