// NOTE: bind 메서드는 함수에 this를 미리 적용하는 것, 부분 적용 함수를 구현하는 목적 둘다 있다.
var func = function(a, b, c, d) {
  console.log(this, a, b, c, d) // this는 window/global이  나오겠고 1, 2, 3, 4 
}

func(1, 2, 3, 4)

var bindFunc1 = func.bind({ x: 1 })
bindFunc1(5, 6, 7, 8) // { x: 1 } 5 6 7 8

// NOTE: func 에 this를 { x: 2} 로 지정하고, 인수를 4, 5로 지정함
var bindFunc2 = func.bind({ x: 2}, 4, 5) // this 지정, 부분 적용 함수 구현
bindFunc2(6, 7) // { x: 2 } 4 5 6 7
bindFunc2(8, 9) // { x: 2 } 4 5 8 9

