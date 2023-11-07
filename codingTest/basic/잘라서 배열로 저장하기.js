function solution(my_str, n) {
    let answer = [];
    let strArr = my_str.split("");

    for (let i = 0; i < my_str.length / n; i++) {
        let spjo = strArr.splice(0, n).join("");
        answer.push(spjo);
    }
    return answer;
}
const result = solution("abc1Addfggg45556b", 6);
console.log(result);
