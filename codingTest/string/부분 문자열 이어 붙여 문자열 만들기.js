// 나의 풀이

function solution(my_strings, parts) {
  const answer = [];
  for (let i = 0; i < my_strings.length; i++) {
    answer.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
  }

  return answer.join('');
}
