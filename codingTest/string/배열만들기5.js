// 나의 풀이

function solution(intStrs, k, s, l) {
  const answer = [];
  for (let i = 0; i < intStrs.length; i++) {
    if (intStrs[i].slice(s, s + l) > k) {
      answer.push(parseInt(intStrs[i].slice(s, s + l)));
    }
  }

  return answer;
}
