// Page 번호 : c4.2, p92
// Page 문제 이름 : 빅오로 코드 속도 올리기 

// 중복 숫자 찾기 O(n)
// 아래 예제 코드의 O(n)은 메모리를 많이 사용한다. 
function hasarray(array){
    let index = [];
    for (let i = 0; i < array.length; i++){
        if (index[array[i]] === 1){
            return true;
        } else { 
            index[array[i]] = 1;
            console.log(index[array[i]]);
        }
    }
    return false;
}

hasarray([3,5,8,5])


