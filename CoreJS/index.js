// NOTE: 1) 최대/최솟값을 구하는 코드 직접 구현
// var numbers = [10, 20, 3, 16, 45]
// var max = min = numbers[0]

// numbers.forEach(function(number) {
//     if(number > max) {
//         max = number;
//     }
//     if (number < min) {
//         min = number;
//     }
// })

// console.log(max, min)

// NOTE: 2) call/apply 메서드 활용
// var numbers = [10, 20, 3, 16, 45]
// var max = Math.max.apply(null, numbers)
// var min = Math.min.apply(null, numbers)

// console.log(max, min)

// NOTE: 3) ES6 펼치기 연산자 활용
const numbers = [10, 20, 3, 16, 45]
const max = Math.max(...numbers)
const min = Math.min(...numbers)
console.log(max, min)
