document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keypad = document.getElementById('keypad');
    const dateTime = document.getElementById('date-time');

    function updateDateTime() {
        const now = new Date();
        dateTime.innerText = now.toLocaleString();
    }

    keypad.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            const value = target.innerText;

            if (value === '삭제') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (value === '입력') {
                alert('입력된 값: ' + display.innerText);
                display.innerText = '';
            } else {
                display.innerText += value;
            }
        }
    });

    // 초기 날짜 및 시간 업데이트
    updateDateTime();
    // 1초마다 날짜 및 시간 업데이트
    setInterval(updateDateTime, 1000);
});
