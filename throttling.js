/* 
  fn: throttling을 적용할 callback 함수
  ms: 마지막 함수 호출 뒤, 다른 함수를 무시하는 기간 (milesecond)
  return throttling이 적용된 함수
*/

const getThrottledFunc = (fn, ms) => {
  let timer = null;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn();
      }, ms)
    }
  }
}