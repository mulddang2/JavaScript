var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments)
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this) // NOTE: 콜백 함수 내부에서의 this는 forEach 함수의 두번째 인자로 전달해준 this가 바인딩 된다. add 매서드의 this(report) 가 전달된 상태
  },
  average: function () {
    return this.sum / this.count 
  }
}
report.add(60, 85, 95)
console.log(report.sum, report.count, report.average()) //240 3 80