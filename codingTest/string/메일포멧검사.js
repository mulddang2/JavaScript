/** NOTE: 제한사항 -->
 *  1. emails의 길이는 1이상 100,000 이하 입니다.
 *  2. emails의 원소는 길이가 1 이상 100 이하인 문자열입니다.
 *  3. emails의 원소는 영문 소문자, . , @로 이루어진 문자열입니다.
 *  */

/** NOTE: 입출력 예
 *  [abc.def@x.com] 만 규격에 맞다.
 *
 */

/**
 * Q. 주어진 메일 주소 중, 규격에 맞는 주소는 몇 개인지 구하려 합니다. 메일 규격은 다음과 같습니다.
 *
 * 규격에 맞는 메일은 " 이름@도메인이름.탑레벨도메인 " 형식 입니다.
 * 이름은 영문 소문자와 .로만 구성되며 길이가 1이상이어야 합니다.
 * 도메인 이름은 영문 소문자로만 구성되며 길이가 1이상이어야 합니다.
 * 탑레벨도메인은 "com", "net", "org" 중 하나입니다.
 *
 * 메일 주소를 담은 배열 emails가 매개변수로 주어질 때, 이 중 규격에 맞는 주소는 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 *
 *
 */
function solution(emails) {
  var answer = 0;
  //return answer;

  //  com, net, org 중 하나 ==> (com|net|org)
  let regExp = new RegExp('^[a-z.]+@[a-z]+\.(com|net|org)$');

  emails.forEach((address) => {
    if(regExp.test(address)) {
      answer++
    }
  });

  return answer;
}

console.log(solution(['d@co@m.com', 'a@abc.com', 'b@bef.com', 'c@ghi.net']));
console.log(solution(['abc.def@x.com', 'abc', 'abc@defx', 'abc@defx.xyz']));
