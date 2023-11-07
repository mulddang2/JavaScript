// NOTE: for - of 에서 element 넣는 자리에 배열 넣을 수 있구나.
// NOTE: for - of 내에 또 for문을 넣고 그 조건에 해당하는 하면 arr의 값을 변경하는 거구나
// NOTE: i % k === 0 은 i가 k의 배수라는 뜻이구나
// NOTE: 0은 모든 자연수의 배수이다.

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);

function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}
