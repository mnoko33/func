/* 
    매개변수로 화폐(num)이 들어왔을 때,
    3자리마다 ,를 찍어서 반환하는 함수
    ex) 1000000 => 1,000,000
*/

function commaizeNumber(num) {
  let result = '';
  num = String(num);
  const N = num.length;
  
  for (let i = 0; i < N; i++) {
    result += num[i];
    if ((N - i - 1) % 3 === 0 && i !== N - 1) {
      result += ',';
    }
  }
  return result;
}
