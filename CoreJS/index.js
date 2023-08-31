var createCar = function () {
  
  var fuel = Math.ceil(Math.random() * 10 + 10) // 연료
  var power = Math.ceil(Math.random() * 3 + 2) // 연비
  var moved = 0;

  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6)
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('이동불가')
        return
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 '+ moved + 'km). 남은 연료: ' + fuel)
    }
  }
  Object.freeze(publicMembers)
  return publicMembers;
}
var car = createCar()
car.run()
console.log(car.fuel)

car.fuel = 1000
console.log(car.fuel)
