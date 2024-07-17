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

  // 학번 형식 검증 함수
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

    let isProcessing = false;
    let isDeleting = false;

    function deleteLastCharacter(event) {
        if (isDeleting) return;
        isDeleting = true;
        
        display.innerText = display.innerText.slice(0, -1);
        isDeleting = false;

         if (event) {
            event.stopPropagation();
        }
    }

    deleteButton.addEventListener('click', deleteLastCharacter);

    enterButton.addEventListener('click', () => {
        if (isProcessing) return;
        isProcessing = true;
        
        const studentNumber = display.innerText;

        if (!validateStudentNumber(studentNumber)) {
            alert('올바른 학번 형식이 아닙니다!');
            display.innerText = '';
            return;
        }
        
        if (studentNumber && studentNumber.trim() !== "") {
            // 학번을 Firebase Realtime Database에 저장
            push(ref(database, 'submissions'), {
                studentNumber: studentNumber,
                timeStamp: new Date().toISOString()
            })
            .then(() => {
                alert('출석 체크 완료!.');
                display.innerText = '';
            })
            .catch(error => {
                console.error('Error writing document: ', error);
                alert('출석 체크 중 오류가 발생했습니다.');
            })
            .finally(() => {
                isProcessing = false;
            });
        } else {
            alert('학번을 입력해주세요.');
            isProcessing = false;
        }
    });

    keypad.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            const value = target.innerText;

            if (value === '삭제') {
                deleteLastCharacter(event);
                 
                
            } else if (value === '입력') {
                if (!isProcessing) {
                   enterButton.click();
               }
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
