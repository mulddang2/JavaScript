/**
 * NOTE: 커링..?
 * 1. 한번에 하나의 인자만 전달한다.
 * 2. 마지막 인자가 전달되기전 까지는 원본 함수가 실행되지 않는다.
 */

var curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10)
console.log(getMaxWith10(8))
console.log(getMaxWith10(25))

var getMinWith10 = curry3(Math.min)(10)
console.log(getMinWith10(8))
console.log(getMinWith10(25))