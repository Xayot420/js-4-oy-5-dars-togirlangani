const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const clickSound = document.getElementById('clickSound');

let currentInput = '';

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function removeActiveClass() {
  buttons.forEach(btn => {
    btn.classList.remove('bg-blue-400', 'text-white');
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    playSound();

    if (value === '=' || value === 'C') return;

    currentInput += value;
    display.textContent = currentInput;

    removeActiveClass(); 
    button.classList.add('bg-blue-400', 'text-white'); 
  });
});

clear.addEventListener('click', () => {
  playSound();
  currentInput = '';
  display.textContent = '0';
  removeActiveClass();
});

equals.addEventListener('click', () => {
  playSound();
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
    removeActiveClass();
  } catch {
    display.textContent = 'Error';
    currentInput = '';
    removeActiveClass();
  }
});