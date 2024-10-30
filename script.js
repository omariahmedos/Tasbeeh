let count = 0;

const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});
