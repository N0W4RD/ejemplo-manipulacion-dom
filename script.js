

const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnChange');
const pResult = document.querySelector('#result');

function random(number) {
    return Math.floor(Math.random()* (number + 1));
}

function changeBackground() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("mouseout", changeBackground);

