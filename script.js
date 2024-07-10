import { ref, push, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { database } from "./firebase-config.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keypad = document.getElementById('keypad');
    const dateTime = document.getElementById('date-time');
    const enterButton = document.getElementById('enter');
    const deleteButton = document.getElementById('delete');

    function updateDateTime() {
        const now = new Date();
        dateTime.innerText = now.toLocaleString();
    }

    function validateStudentNumber(studentNumber) {
        // 학번은 5자리여야 함
        if (studentNumber.length !== 5) {
          return false;
        }
    
        // 각 자리별 조건 검증
        var A = parseInt(studentNumber.charAt(0), 10);
        var B = parseInt(studentNumber.charAt(1), 10);
        var C = parseInt(studentNumber.charAt(2), 10);
        var D = parseInt(studentNumber.charAt(3), 10);
        var E = parseInt(studentNumber.charAt(4), 10);
    
        // 조건 검증
        if (!(A >= 1 && A <= 3) || !(B === 0 || B === 1) || !(D >= 0 && D <= 2)) {
          return false;
        }
    
        return true;
    }
    
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

        if (!validateStudentNumber(studentNumber)) {
            alert('올바른 학번 형식이 아닙니다!');
            return;
        }
        
        if (studentNumber) {
            // 학번을 Firebase Realtime Database에 저장
            push(ref(database, 'submissions'), {
                studentNumber: studentNumber,
                timeStamp: new Date().toISOString()
            })
            .then(() => {
                alert('출석 체크 완료!.');
                display.value = '';
            })
            .catch(error => {
                console.error('Error writing document: ', error);
            });
        } else {
            alert('학번을 입력해주세요.');
        }
    });

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
