function solution(k, m, score) {
  if (score.length < m) return 0;

  // 1. 순차정렬
  score.sort();

  // 5. 여러상자일 때 다 더하기
  let totalPrice = 0;
  // 2. 상자안에 담긴 갯수 보다 score배열이 길어야 실행
  while (score.length >= m) {
    // 3. 뒤에서 부터 m 만큼 자른다
    const box = score.splice(score.length - m, m);

    // 4. 박스의 최저점 * m
    totalPrice += Math.min.apply(Math, box) * m;
  }
  return totalPrice;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
