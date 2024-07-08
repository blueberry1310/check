document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    const deleteBtn = document.getElementById('delete');
    const enterBtn = document.getElementById('enter');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            display.value += key.getAttribute('data-value');
        });
    });

    deleteBtn.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });

    enterBtn.addEventListener('click', () => {
        alert('Entered: ' + display.value);
        display.value = '';
    });
});
