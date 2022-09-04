function testReduce(){
    var array = [0,1,2,3,4,5];
    array.reduce(function(previousValue, currentValue, currentIndex, array1){
        console.log(previousValue);
        console.log(currentValue);
        console.log(currentIndex);
        console.log(array1);
    });  
}


// JSON.parse(jsonData): 웹서버에서 받은 JSON을 JS 객체로 변환
// JSON.stringify(jsValue): JS 객체를 JSON 형태로 변환.

/*
JS 고차함수

* 고차함수(High-Order-Function) : 다른 함수를 소비 또는 생성하는 함수

*/

/*
reduce 함수

array.reduce(callbackFunction(previousValue, currentValue, currentIndex, array1), [initialValue]); 
// reduce는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를 만듭니다.

filter 함수

arr.filter(callbackFunction(element, index, array1), [thisArg]);
// filter 함수는 명칭과 같이 callbackFunction의 조건에 해당하는 모든 요소가 있는 배열을 새로 생성하는 기능을 합니다.

forEach 함수

array.forEach(callbackFunction(currnetValue, index, array), thisArg);
// 

*/



/*
 JS 배열 함수 정리 

Array.isArray(obj) // obj가 배열인지 확인, 배열이면 true, 아니면 false
concat(value1, value2, ... , valueN) // value들을 합쳐 새로운 배열을 만든다.
copyWithin(target, [start], [end]) // 배열의 인자를 복사한뒤 다른 위치에 덮어 쓰기 한다. 음수일 경우 뒤에서 부터 계산, length는 변하지 않는다.
fill(value, start, end)  // start index부터 end index 전까지 value 값으로 치환 
indexOf() // 배열내에 값이 있는지 확인하고, 있다면 해당 인자의 인덱스를, 없다면 -1 을 리턴한다.
fill(value, start, end) // start index부터 end index 전까지 value 값으로 치환. 음수값이 들어갈 경우 length+값 이 인덱스가 됩니다.
indexOf() // 배열내에 값이 있는지 확인하고, 있다면 해당 인자의 인덱스를, 없다면 -1 을 리턴한다.
include() // 배열내 값이 있다면 true를 없다면 false를 리턴한다.
join() // 배열의 모든 요소를 연결해 하나의 문자열로 만들 때 사용. param으로 '/', ',' 등을 넣어서 사용한다.
shift() // 배열의 처음 인자를 제거하고 제거한 인자를 리턴한다. 배열의 길이가 변한다.
unshift(item1,item2, ...item3) // 배열의 첫번째 인덱스에 주어진 값들을 추가하고 배열의 length를 리턴한다.
pop() // 배열의 마지막 인자를 제거하고 이를 리턴한다. 배열의 길이가 변한다.
slice(start, end) // start부터 end(선택) 전 까지 인자를 추출하여 새로운 배열을 만든다. end가 없을 경우 배열의 length까지.
splice(start, deleteCnt, item1, item2, ...item3) 배열 기존 인자를 제거하거나 새 인자를 추가하여 기존 배열을 변경.
reverse() // 배열을 반전한다.
Link0 // javascript sort 자바스크립트 배열 정렬 방법 오름차순 내림차순

*/
