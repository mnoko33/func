function regex(input) {
    return { email, phoneNum, password }

    // 이메일 체크
    function email() {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return regExp.test(input);
    }

    // 핸드폰 번호 체크
    function phoneNum() {
        const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        return regExp.test(input);
    }

    // 비밀번호 체크
    // 숫자, 영문자 조합으로 6 ~ 12자리
    function password() {
        const regExp = /^[A-Za-z0-9]{6,12}$/;
        return regExp.test(input);
    }
}