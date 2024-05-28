document.addEventListener('DOMContentLoaded', () => {
    const leftDiv = document.getElementById('left-div');
    const rightDiv = document.getElementById('right-div');
    const btnMoveRight = document.getElementById('btn-move-right');
    const btnMoveLeft = document.getElementById('btn-move-left');
    const btnMoveAllRight = document.getElementById('btn-move-all-right');
    const btnMoveAllLeft = document.getElementById('btn-move-all-left');

    const moveSelected = (fromDiv, toDiv) => {
        const checkboxes = fromDiv.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            toDiv.appendChild(checkbox.parentElement);
            checkbox.checked = false;
        });
        toggleButtons();
    };

    const moveAll = (fromDiv, toDiv) => {
        const checkboxes = fromDiv.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            toDiv.appendChild(checkbox.parentElement);
            checkbox.checked = false;
        });
        toggleButtons();
    };

    const toggleButtons = () => {
        const leftItems = leftDiv.querySelectorAll('input[type="checkbox"]').length;
        const rightItems = rightDiv.querySelectorAll('input[type="checkbox"]').length;

        if (leftItems === 0) {
            btnMoveRight.classList.add('disable');
            btnMoveAllRight.classList.add('disable');
        } else {
            btnMoveRight.classList.remove('disable');
            btnMoveAllRight.classList.remove('disable');
        }

        if (rightItems === 0) {
            btnMoveLeft.classList.add('disable');
            btnMoveAllLeft.classList.add('disable');
        } else {
            btnMoveLeft.classList.remove('disable');
            btnMoveAllLeft.classList.remove('disable');
        }
    };

    btnMoveRight.addEventListener('click', () => {
        if (!btnMoveRight.classList.contains('disable')) {
            moveSelected(leftDiv, rightDiv);
        }
    });

    btnMoveLeft.addEventListener('click', () => {
        if (!btnMoveLeft.classList.contains('disable')) {
            moveSelected(rightDiv, leftDiv);
        }
    });

    btnMoveAllRight.addEventListener('click', () => {
        if (!btnMoveAllRight.classList.contains('disable')) {
            moveAll(leftDiv, rightDiv);
        }
    });

    btnMoveAllLeft.addEventListener('click', () => {
        if (!btnMoveAllLeft.classList.contains('disable')) {
            moveAll(rightDiv, leftDiv);
        }
    });

    toggleButtons();
});
