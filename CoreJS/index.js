// NOTE: 비동기 작업의 동기적 표현 - Promise(1)
new Promise(function (resolve) {
  setTimeout(function () {
    var name = '에스프레소';
    console.log(name);
    resolve(name);
  }, 500);
})
  .then(function (Name) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = Name + ', 아메리카노';
        console.log(name);
        resolve(name);
      }, 1000);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ', 카페모카';
        console.log(name);
        resolve(name);
      }, 1500);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ', 카페라떼';
        console.log(name);
        resolve(name);
      }, 2000);
    });
  });
