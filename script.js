document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    const enterButton = document.getElementById('enter');
    const deleteButton = document.getElementById('delete');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            display.value += key.getAttribute('data-value');
        });
    });

    deleteButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });

    enterButton.addEventListener('click', () => {
        const studentNumber = display.value;
        if (studentNumber) {
            // 학번을 Firebase Realtime Database에 저장
            const newStudentRef = database.ref('studentNumbers').push();
            newStudentRef.set({
                studentNumber: studentNumber,
                timestamp: new Date().toISOString()
            })
            .then(() => {
                alert('학번이 성공적으로 저장되었습니다.');
                display.value = '';
            })
            .catch(error => {
                console.error('Error writing document: ', error);
            });
        } else {
            alert('학번을 입력해주세요.');
        }
    });
});
