// Page 번호 : c4.2, p92
// Page 문제 이름 : 빅오로 코드 속도 올리기 

// 중복 숫자 찾기 O(n2)
function fasarray(array) {
    let index = [];
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if( i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

fasarray([3,5,8])