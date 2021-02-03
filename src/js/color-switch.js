const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const ref = {
    buttonStart: document.querySelector('button[data-action = start]'),
    buttonStop: document.querySelector('button[data-action = stop]'),
    body: document.querySelector('body'),

}

let timeoutId = null;

let isActive = false;

ref.buttonStart.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    console.log('hello');
    isActive = true;
    timeoutId = setInterval(() => {
       changeBodyColors()

    }, 1000)

});

ref.buttonStop.addEventListener('click', () => {
    isActive = false;
    clearTimeout(timeoutId);

});

function changeBodyColors() {
    
 let randomColors = colors[Math.floor(Math.random() * colors.length)];
        ref.body.style.background = randomColors;

};