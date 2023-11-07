function solution(num, k) {
    let answer = -1;
    let value = num.toString().split("");
    for (let i = 0; i < value.length; i++) {
        if (k == value[i]) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}

console.log(solution(29183, 4));

function solution(num, k) {
    let answer = -1;
    let value = Array.from(String(num));
    console.log(value)
    for (let i = 0; i < value.length; i++) {
        if (k == value[i]) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}

console.log(solution(29183, 4));
