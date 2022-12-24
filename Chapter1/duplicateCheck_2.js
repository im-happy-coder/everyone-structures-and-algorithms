// 중복 숫자 찾기 O(n2)
function fasarray(array) {
    let index = [];
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if( i !== j && array[i] === array[j]) {
                console.timeEnd('calculatingTime')
                return true;
            }
        }
    }
    return false;
}

fasarray([3,5,8])