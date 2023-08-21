console.log(sum(1, 2))
// console.log(multiply(3, 4))

// NOTE: 함수 선언문 => 함수 전체를 호이스팅함
// NOTE: 아래에서 sum함수를 함수 선언문으로 실수로 만든 경우, 윗부분에서 숫자 값을 반환하리라 기대했지만 override.
function sum(a, b) {
  return a + b;
}

var a = sum(1, 1)


function sum(a, b) {
  return a + '+' + b + '=' + (a + b);
}

var c = sum(5, 5)
console.log(c)

// NOTE: 함수 표현식 => 변수 선언부만 호이스팅됨, 변수의 할당부는 원래 자리에 남겨둔다. 
// var multiply = function multiply(a, b) {
//   return a * b;
// }


// var sum = function sum (a, b) {
//   return a + b
// }
// var multiply;
// console.log(sum(1, 2))
// console.log(multiply(3, 4))

// multiply = function (a, b) {
//   return a * b
// }

