// 나의 풀이
function solution(number) {
  const numArr = number.split('').map((v) => Number(v));
  const numArrToSum = numArr.reduce((acc, cur) => acc + cur);

  return numArrToSum % 9;
}

// 다른 사람의 풀이
function solution2(number) {
  return [...number].reduce((a, b) => +a + +b) % 9;
}

console.log(solution('78720646226947352489'));
console.log(solution2('78720646226947352489'));

/**
 * NOTE:
 * 1. 굳이 변수를 또 만들 필요없었을 것 같다.
 * 2. 자동형변환 써서 더 간단하게 할 수도 있을 듯하다.
 * 3. 스프레드 문법 사용하면 좋을 것 같다.
 *
 */
