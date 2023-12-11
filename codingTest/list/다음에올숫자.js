function solution(common) {
  const lastValue = common[common.length - 1]

  if(common[1] - common[0] === common[2] - common[1]) {
      return lastValue + (common[1] - common[0])
  } else {
      return lastValue * (common[1] / common[0])
  }

}