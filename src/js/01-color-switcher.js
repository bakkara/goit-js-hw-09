function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', startChangeColor);


buttonStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
    buttonStart.disabled = true;
    timerId = setInterval(changeColor, 1000);
    buttonStop.disabled = false;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
function stopChangeColor() {
    buttonStop.disabled = true;
    clearInterval(timerId);
     buttonStart.disabled = false;
}

