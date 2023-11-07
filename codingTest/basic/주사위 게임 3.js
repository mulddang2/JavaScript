function solution(a, b, c, d) {
  let answer = 0;
  let val = 0; // 중복 요소 갯수
  let matchedValue = []; // 중복된 값 배열
  let otherValue = []; 
  let numArray = [a, b, c, d];

  numArray.sort();

  let counts = new Set(numArray);

  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] === numArray[i + 1]) {
      val = val + 1;
      matchedValue.push(numArray[i]);
    }
  }

  let arr = Array.from(counts);

  console.log(arr, counts);
  if(counts.size === 1) answer = 1111 * a;
  if(counts.size === 2) {
    if(matchedValue[0] === matchedValue[1]) {
      // filter를 통해 같지 중복되지 않은 값 찾기 
        arr = arr.filter((item) => item !== matchedValue[0]) // [1]

        answer = Math.pow((10 * matchedValue[0] + arr[0]), 2);
    } else {
    answer = (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
    }
  }
  if(counts.size === 3) {
    arr = arr.filter((item) => matchedValue[0] !== item);
    answer = arr[0] * arr[1];
  }
  if(counts.size === 4) answer = Math.min(...numArray);

  return answer;
}

solution(1, 4, 3, 4)