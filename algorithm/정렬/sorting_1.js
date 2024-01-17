let swap = function (arr, idx_1, idx_2) {
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 수행 횟수
    for (let j = 0; j < arr.length - 1; j++) {
      // 인접한 애들끼리 정렬
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};
// 최적화_1: 이미 정렬된 부분은 체크 안하도록
let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 수행 횟수
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 인접한 애들끼리 정렬
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// 최적화_2: 한번도 swap 안되면 이미 정렬된 것 조건 걸어주기
let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    // 한번도 swap 안되면 이미 정렬된 것
    if (!swapped) break;
  }
};

/** text code */
let init_array = [6, 5, 1, 3, 2, 4];

let array = [...init_array];
bubbleSort_1(array);
console.log(`bubbleSort_1 으로 정렬한 것: ${array}`)
array = [...init_array];
bubbleSort_2(array);
console.log(`bubbleSort_2 으로 정렬한 것: ${array}`);
array = [...init_array];
//console.log(array);
bubbleSort_3(array);
console.log(`bubbleSort_3 으로 정렬한 것: ${array}`);




