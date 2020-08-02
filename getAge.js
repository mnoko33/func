/* 
    매개변수로 어떤 유저의 생일(yyyy-mm-dd hh:mm:ss)이 들어왔을 때,
    해당 유저의 만 나이와 한국 나이를 반환 ([만나이, 한국나이])
    단 아직 태어나지 않은 유저의 경우 [0, 0]을 반환
*/

function getAge(birthDate) {
    birthDate = new Date(birthDate);
    nowDate = new Date();

    if (birthDate > nowDate) return [0, 0];

    let manAge, koreanAge;

    const [birthYear, birthMonth, birthDay] = [birthDate.getFullYear(), birthDate.getMonth() + 1, birthDate.getDate()];
    const [nowYear, nowMonth, nowDay] = [nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()];

    manAge = nowYear - birthYear;
    if (birthMonth > nowMonth || birthMonth === nowMonth && birthDay > nowDay) {
        manAge -= 1;
    }

    koreanAge = nowYear - birthYear + 1;

    return [manAge, koreanAge];
}

console.log(getAge('1993-12-27 00:00:00'))
