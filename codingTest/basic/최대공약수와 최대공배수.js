function solution(a, b) {
  const gcd = calc_gcd(a, b);
  const lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  // 왜 (a, b % a) 하면 안되는가? ==> b가 0일 경우 재호출 처리해야해서 " calc_gcd(a, b % a) " 
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}

solution(3, 12);
