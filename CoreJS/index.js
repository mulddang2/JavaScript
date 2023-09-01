// TODO: 다시 공부해보기 : 이게 왜 클로저 정의에 부합한지 더 공부..

Object.defineProperty(global, '_', {
  value: 'EMPTY_SPACE',
  writable: false,
  configurable: false,
  enumerable: false,
});

var partial2 = function () {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }

  return function () {

    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
      // NOTE: Array.prototype.slice : begin 부터 end 까지 얕은 복사로 배열객체를 반환함
      // NOTE: Function.prototype.call() 메서드를 사용해서 바인딩할 수 있다.
      // slice를 통해서 새로운 Array를 변환하기 위하여 Function.prototype.call()으로 바인딩을 해주어야 한다.


    // NOTE: Array.prototype을 [] 로 간단하게 쓸수 있음
    var restArgs = [].slice.call(arguments);

    // 처음에 넘겨준 인자들 중, _로 비워놓은 공간마다, 나중에 넘어온 인자들이 차례대로 끼워짐
    for (var i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _) {
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));

var dog = {
  name: '강아지',
  greet: partial2(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, '),
};
dog.greet(' 배고파요!');
