

function changeColor(square) {
    if (!square.dataset.color) {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = randomColor;
        square.dataset.color = randomColor;
        checkGameOver();
    }
}

function checkGameOver() {
    const divs = document.querySelectorAll('.square');
    let coloredCount = 0;
    const totalDivs = divs.length;

    for (const div of divs) {
        if (div.dataset.color) {
            coloredCount++;
        }
    }

    if (coloredCount === totalDivs) {
        alert('Game over!');
    }
}
