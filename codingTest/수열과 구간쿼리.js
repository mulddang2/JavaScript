// solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]);

// function solution(arr, queries) {
//   return queries.map(
//     ([s, e, k]) =>
//       arr
//         .slice(s, e + 1)
//         .filter((n) => n > k)
//         // NOTE: sort((a, b) => a - b) 는 숫자 배열을 오름차순 할 때 사용한다.
//         .sort((a, b) => a - b)[0] || -1
//   );
// }

// function solution(arr, queries) {
//   /* NOTE: arr.slice() --> 처음부터 끝까지 인덱스(끝은 포함되지 않음) 선택된 새 배열 객체로 배열 부분의 얕은 복사본을 반환. 하지만, 포함해서 반환하고싶기 때문에, e+1 한 것이다.
//   결과: [ [ 0, 1, 2, 4, 3 ], [ 0, 1, 2, 4 ], [ 0, 1, 2 ] ]

//   위 결과로, 첫번째 쿼리 범위, 두번째 쿼리 범위, 세번째 쿼리 범위를 찾을 수 있었다.
//   */
//   return console.log(queries.map(([s, e, k]) => arr.slice(s, e+ 1)))
// }

// //NOTE: 찾은 쿼리범위에서, k인 2보다 큰 애들을 골라낸다. 결과: [ [ 4, 3 ], [ 4 ], [] ]
// function solution(arr, queries) {
//   console.log(queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k)))

// }

// //NOTE: 배열안에 숫자를 정렬해서, 그 중 가장 작은 0번째 인덱스를 찾는다. 결과: [ 3, 4, undefined ]
// function solution(arr, queries) {
//   console.log(
//     queries.map(
//       ([s, e, k]) =>
//         arr
//           .slice(s, e + 1)
//           .filter((n) => n > k)
//           .sort((a, b) => a - b)[0]
//     )
//   );
// }

//NOTE: 특정쿼리 답이 존재하지 않을 경우, -1 을 저장한다.  결과: [ 3, 4, -1 ]
function solution(arr, queries) {
  console.log(queries.map(([s, e, k]) => arr.slice(s, e+1).filter((n)=> n > k).sort((a,b) => a-b)[0] || -1))
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);

//.filter((n) => n > k)
