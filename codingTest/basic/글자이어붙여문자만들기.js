// 나의 풀이
function solution(my_string, index_list) {
  var answer = [];
  // for문으로 index_list 돌려서, 그 i를
  // my_string 인덱스 값 찾는 거 이용하면 될거같은데..
  // answer.push(my_string[index_list[0]])
  // answer.push(my_string[index_list[1]])
  for (let i = 0; i < index_list.length; i++) {
    answer.push(my_string[index_list[i]]);
  }
  return answer.join('');
}

// 다른 사람 풀이
function solution2(my_string, index_list) {
  return index_list.map(i => my_string[i]).join('')
}

console.log(solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7] ))
console.log(solution2("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]))