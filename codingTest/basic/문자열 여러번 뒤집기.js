function solution(my_string, queries) {
  // 1. reverse 메서드 사용하려면 배열로 쪼개야함
  let str = my_string.split('');

  // 2. 쿼리 안의 2차원 배열 0번째가 시작인덱스, 1번째가 끝나는 인덱스 
queries.forEach(([start, end]) => {
  // 3. slice 메서드는 마지막 앞에 까지 자르기 때문에 + 1 해주어야함
  const changeStr = str.slice(start, end + 1);

  // 4. 3에서 자른 것을 뒤집어서 원본 배열을 바꿈 
  str.splice(start, changeStr.length, ...changeStr.reverse());
});

// 5. join 메서드 활용해서 합치기
return str.join('');
}

solution(	"rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]])
