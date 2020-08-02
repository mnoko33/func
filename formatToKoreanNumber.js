/* 
    매개변수로 화폐(num)이 들어왔을 때,
    억,만단위에 해당 한글을 붙여주고
    3자리마다 ,를 찍어서 반환하는 함수
    ex1) 10000000 => 1,000만
    ex2) 12345678 => 1,234만 5678
    ex3) 1234567890 => 12억 3,456만 7890
    단 화폐(num)은 1조 미만의 숫자
*/

function formatToKoreanNumber(num) {
    if (!num) return 0;
    if (num >= 1000000000000) throw "Number can not exceed 1 trillion"

    let result = '';
    num = String(num);
    const N = num.length;
    let flag = false;
    
    for (let i = 0; i < N; i++) {
        if (flag === false && num[i] === '0') continue;
        if (num[i] > 0) flag = true;
        result += num[i];

        // 단위 붙이기
        if (N - i - 1 === 8) {
            result += '억 ';
            flag = false;
        } else if (N - i - 1 === 4) {
            result += '만 ';
            flag = false;
        }

        // 콤마 붙이기
        if ((N - i) % 4 === 0 && i !== N - 1 && flag === true) {
            result += ',';
        }
    }
    
    return result;
}