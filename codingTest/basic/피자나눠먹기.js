/* 나의 풀이 

머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.


 function solution(slice, n) {
     let pizzaPan = n / slice; 
     if (n % slice > 0) {
         pizzaPan = Math.ceil(pizzaPan);
     }
     return pizzaPan;
 }

 n명 / slice 해서 pizzaPan 변수에 담는다.
 n을 slice로 나눴을 때, 나머지가 0보다 크면 => 나머지가 있으면 
 pizzaPan 값의 나머지를 무조건 올린다. (Math.ceil) 함수 사용

 ** 사용한 함수 ** 
 Math.ceil() 메서드는 숫자를 가장 가까운 정수로 반올림합니다.

 */

/* 다른 사람 풀이 */
function solution(slice, n) {
    let answer = 0;
    while (n > slice * answer) {
        console.log(answer++); //num++ 표현식 자체는 증가시키기 전의 값을 반환합니다. 즉 여기서는 0이 출력되겠지
        
    }
    return answer  //이게 찐..
}
console.log(solution(10, 1));

