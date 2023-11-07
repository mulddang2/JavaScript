// function solution(n) {
//   let answer = [n];

//   // 배열요소의 조건
//   let val = n%2 ===0 ? n/2 : 3*n+1;

  
//   while(val !== 1) {
//     // 처음 val의 값을 포함해야해서 우선 push
//     answer.push(val);
//     if(val%2 === 0) {
//       // 짝수이면, 2를 나눠서 val에 할당해준다.
//       val /= 2
//     } else {
//       val = 3 * val + 1
//     }
//   }
//   answer.push(1)
//   return answer;
// }
// console.log(solution(10))


function solution(n) {
  const answer = [n];
// 마지막 n이 2이고, 삼항연산자로 짝수로 계산되고 나서 푸쉬하니까 1도 포함된다.
  while(n !== 1) {
    n = n%2 === 0 ? n/2 : 3*n+1
    answer.push(n)
  }
  return answer;
}
console.log(solution(10))
