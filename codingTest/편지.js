/* 풀이 1 */
function solution1(message1) {

    return message1.length * 2
}

console.log(solution1('asdgh !!!!'));


/* 내 생각이랑 비슷했던 풀이 2 */
function solution2(message2) {
    var answer = 0;
    if (1 <= message2.length <= 50) {
        answer = message2.length * 2
    }
    return answer;
}
console.log("조건식 추가한 풀이 = " + solution2('qwertyuiopasdfghjklzx cvbnm fd')); //조건식 추가한 풀이 = 60

//결론: 어차피 제한사항에서 50 밑으로 넣으라했기때문에 굳이 조건식을 넣어줄 필요가 없을 듯하다. '문자열의 길이'를 알고 싶을 때 사용하는 length는 띄어쓰기도 체크한다.

