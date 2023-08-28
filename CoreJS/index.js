// NOTE: 콜백지옥 해결 - 기명함수로 변환

var coffeeList = '';

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 3000, '아메리카노');
};

var addAmericano = function (name) {
  coffeeList += ',' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 3000, '카페모카');
};

var addMocha = function (name) {
  coffeeList += ',' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 3000, '카페라떼');
};

var addLatte = function (name) {
  coffeeList += ',' + name;
  console.log(coffeeList)
}

setTimeout(addEspresso, 3000, '에스프레소')