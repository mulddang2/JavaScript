/**
 * NOTE:
 * 디바운스: 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우, 이를 전부처리하지 않고, 처음 또는 마지막에 발생한 이벤트에 대해 한번만 처리하는 것 --> FE 성능 최적화에 도움을 준다
 *          
 */

var debounce = function (eventName, func, wait) {
  var timeoutId = null;
  return function (event) {
    var self = this;
    console.log(eventName, 'event 발생')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(func.bind(self, event), wait)
  }
}

var moveHandler = function (e) {
  console.log('move event 처리')
}

var wheelHandler = function (e) {
  console.log('wheel event 처리')
}

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500))
document.body.addEventListener('mousewheel', debounce('wheel', moveHandler, 700))
