document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    const deleteBtn = document.getElementById('delete');
    const clearBtn = document.getElementById('clear');
    const enterBtn = document.getElementById('enter');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            display.value += key.getAttribute('data-value');
        });
    });

    deleteBtn.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });

    clearBtn.addEventListener('click', () => {
        display.value = '';
    });

    enterBtn.addEventListener('click', () => {
        alert('Entered: ' + display.value);
        display.value = '';
    });
});
