import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

refs.buttonStart.addEventListener('click', addStyle);
refs.buttonStop.addEventListener('click', stopStyle);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function addStyle() {
  intervalId = setInterval(changeColor, 1000);
  refs.buttonStart.removeEventListener('click', addStyle);
}

function changeColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function stopStyle() {
  clearInterval(intervalId);
  refs.buttonStart.addEventListener('click', addStyle);
}
