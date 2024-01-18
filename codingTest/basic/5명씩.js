// 문제: 5명씩 묶어서 각 배열의 맨 처음 이름 출력하기 

function solution(names) {
  var answer = [];

  for(let i = 0; i < names.length; i += 5) {
      let temp;
      temp = names.slice(i, i + 5)
      answer.push(temp[0])
  }

  return answer;
}