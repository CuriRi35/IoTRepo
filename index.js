const buttons = document.querySelectorAll('.flag');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.value === '空き') {
      button.value = '使用中';
      button.style.color = 'white';
      button.style.backgroundColor = 'red';
    } else {
      button.value = '空き';
      button.style.color = 'black';
      button.style.backgroundColor = 'rgba(220,220,220,0.6)';
    }
  });
});