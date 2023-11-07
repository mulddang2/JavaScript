function solution(my_string) {
    let sp = my_string.split(" ");

    let result = Number(sp[0]); //숫자 5

    for (let i = 1; i < sp.length; i += 2) {
        let symbol = sp[i]; //+연산을 전부 symbol 변수에 넣음
        let num = Number(sp[i + 1]);
        //+ 바로뒤 문자열을 num에 넣고, 숫자로 변경
        if (symbol === "+") {
            result += num; //+이면 더하기문자 뒤에 있는 숫자를 더해서 result에 할당함
            //console.log(result);
        } else {
            result -= num; //-면 빼기 뒤에 있는 숫자를 빼서 result에 할당
        }
    }
    return result;
}
console.log(solution("5 + 4 + 2 + 1 + 1"));
