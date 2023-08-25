// NOTE: 화살표함수는 실행 컨텍스트 생성 시, this 바인딩과정 제외되었기 때문에, 화살표함수에서 this는 스코프체인상 가장 가까운 this에 접근하게 된다. --> 이렇게 하면, call/apply/bind 적용할 필요가 없다.
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
