function solution(my_string) {
    let arr = my_string
        .split("")
        .map((x) => +x)
        .filter((num) => !isNaN(num))
        .sort((a, b) => a - b);

    let arr2 = my_string;
    arr2 = arr2.split("");
    arr2 = arr2.map((x) => +x);
    arr2 = arr2.filter((num) => !isNaN(num));
    arr2 = arr2.sort((a, b) => a - b);

    return arr;
}
console.log(solution("p2o4i8gj2"));
