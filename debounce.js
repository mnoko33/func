/* 
  fn: debounce를 적용시킬 함수
  ms: 이벤트 호출이 끝났음을
*/
const getDebouncedFunc = (fn, ms) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn()
    }, ms)
  }
}