function solution(order) {
    return String(order)
        .split("") //[ '3', '3', '3', '3' ]
        .filter(word => Number(word) % 3 === 0 && Number(word) !== 0).length;
}
console.log(solution(3333));

/** 제대로 익힌 부분 
1. 숫자를 하나씩 잘라서 배열에 담고 싶을 때 

- 숫자 => 문자열로 변경 => split 함수로 분리

2. length 는 문자열의 길이를 반환함

- 'abcd'.length 는 4

3. 화살표 함수

- 매개변수값을 받아서 반환하는 것
- 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있습니다. 
예시 1), 2) 는 동일한 표현임
ex.  1) let sum = (a, b) => a + b; 
    2) let sum = function (a, b) {
        return a +b
        } 
4. String( 여기에 숫자 또는 숫자를 값으로 하는 변수 입력)

- 숫자를 문자열로 변환하는 함수



*/
