const searchButton = document.getElementById('search');
const luckyButton = document.getElementById('lucky');
const logo = document.getElementById('logo');
const field = document.getElementById('field');

const goToGoogle = () => {
  if (confirm('Taking you to the \'real\' Google, now...')) {
    window.location = 'https://www.google.com/';
  }
  return false;
}

const lmgtfy = (event) => {
  if (event.target.id === 'search') {
    if (field.value === '') {
      alert('You have to type something, silly.');
    }
    else if (field.value === 'how to eat a pickle') {
      window.location = 'results-page.html';
    }
    else {
      window.location = `http://lmgtfy.com/?q=${field.value.replace(/\s/g, '+')}`;
    }
  }
  else {
    window.location = 'results-page.html';
  }
}

const keyScreen = (event) => {
  if (event.keyCode === 13) {
    lmgtfy();
  }
  return false;
}

window.onload = () => {
  searchButton.addEventListener('click', lmgtfy, false);
  luckyButton.addEventListener('click', lmgtfy, false);
  logo.addEventListener('click', goToGoogle, false);
  field.addEventListener('keyup', keyScreen, false);
}

window.onunload = () => {
  searchButton.removeEventListener('click', lmgtfy, false);
  luckyButton.removeEventListener('click', lmgtfy, false);
  logo.removeEventListener('click', goToGoogle, false);
  field.removeEventListener('keyup', keyScreen, false);
}
