function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 절댓값으로 오름차순 정렬 : sort((a,b) => Math.abs(a-n) - Math.abs(b-n))
// || 연산자를 활용하여 단축평가 하면, false(0) 일 때, b - a 실행
