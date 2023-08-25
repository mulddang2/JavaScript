// NOTE: 상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기
// var obj = {
//   outer: function() {
//     console.log(this)
//     var innerFunc = function (){
//       console.log(this)
//     }
//     innerFunc.call(this)
//   }
// }
// obj.outer()

// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc = function () {
//       console.log(this)
//     }.bind(this) // 내부함수에 bind로 this를 전달하면, 여기서 this는 obj를..
//     innerFunc()
//   },
// };
// obj.outer();

var obj = {
  logThis: function () {
    console.log(this);
  },
  logThisLater1: function () {
    setTimeout(this.logThis, 500);
  },
  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 500);
  },
};

obj.logThisLater1() //Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
obj.logThisLater2() // obj {logThis: ƒ, logThisLater1: ƒ, logThisLater2: ƒ} 를 가리킨다.
