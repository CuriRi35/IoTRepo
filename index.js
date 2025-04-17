const submit = document.querySelector('.submit');
const aside = document.querySelector('aside');
const button = document.querySelector('button');
    let isClicked = false;

    aside.addEventListener('click', () => {
      if (isClicked) {
        aside.classList.remove('show');
        submit.innerHTML = '絶対にボタン&#33;<br/><span>押して..</span>';
        aside.style.backgroundColor = '#FF0000';
        aside.style.color = '#000000';
      } else {
        aside.classList.add('show');
        submit.innerHTML = '<span>入室中&#33;</span>';
        aside.style.backgroundColor = '#800080	';
        aside.style.color = '#FFFFFF';
      }
      isClicked = !isClicked;
});