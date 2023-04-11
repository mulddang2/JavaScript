//약수 : 어떠한 수로 나누었을 때, 나누어 떨어지는 경우(나머지가 없는경우), 그 수가 나눈 수의 약수라고 함.즉, 나머지가 0이 되어야 함.
function solution(n) {
    let answer = []; //answer변수를 배열로 담음
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i); //배열인 answer 변수에 i를 맨뒤에 추가해라
        }
        //i=1부터 실행; i가 n보다 같거나 작을 때, 아래 문장을 실행함, false 나오면 종료. 만약 실행문이 실행되었다면, 실행문을 "모두 실행"시키고 나서, 증감식을 실행시킨 후에 다시 조건식을 평가한다.
    }
    return answer; //answer 변수를 반환해라
}
console.log(solution(24));
