const mole = document.getElementById('mole');
const scoreElement = document.getElementById('score');
let moleSize = 50;
const originalSize = moleSize;
let score = 0;

function getRandomPosition() {
    const maxX = window.innerWidth - mole.offsetWidth;
    const maxY = window.innerHeight - mole.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y};
}

function getRandomSize() {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

mole.addEventListener('click', () => {
    console.log('Event listener triggered!');
    const randomPosition = getRandomPosition();
    console.log(randomPosition);
    mole.style.top = `${randomPosition.y}px`;
    mole.style.left = `${randomPosition.x}px`;
    moleSize = getRandomSize();
    mole.style.width = `${moleSize}px`;
    mole.style.height = `${moleSize}px`;
    mole.style.backgroundColor = getRandomColor();
    score += 1;
    scoreElement.textContent = `Score: ${score}`;
});

setInterval (() => {
    if (moleSize > 1) {
        moleSize -=1;
        mole.style.width = `${moleSize}px`;
        mole.style.height = `${moleSize}px`;
    }
}, 100);