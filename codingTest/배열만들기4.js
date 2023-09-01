// 나의 풀이
// function solution(arr) {
//   let stk = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (stk.length === 0) {
//       stk.push(arr[i]);
//       i = i + 1;
//     } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
//       stk.push(arr[i]);
//       i = i + 1;
//     } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
//       stk.pop();
//     }
//   }

//   return stk;
// }

// TODO: 다른 사람 풀이
function solution(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}
solution([1, 4, 2, 5, 3]);
