function solution(n, numlist) {
    return numlist.filter((a) => a % n === 0);
}
console.log(solution(5, [1, 9, 3, 10, 13, 5]));

// 응용: 홀수인 값만 고르는 함수 만들기
// 2로 나누면 나머지가 1인 것

/* 
 function solution(oddlist) {
     return oddlist.filter((odd) => odd % 2 === 1);
 }
 console.log(solution([1, 3, 4, 5, 6, 9])); 
*/
