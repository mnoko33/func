/*  
  싱글톤 다크모드 버튼

  CSS는 변수를 이용하여 다음과 같이 적용
  :root[color-mode = 'dark'] {
    --bg-color: #000;
    --font-color: #FFF;
}

  :root[color-mode = 'light'] {
    --bg-color: #FFF;
    --font-color: #000;
}
*/

const btnMaker = (() => {
  let instance;
  const init = () => {
    // OS 설정에 맞게 mode 세팅
    let mode = window.matchMedia('{ prefers-color-scheme: dark }').matches
      ? 'dark'
      : 'light'
    document.documentElement.setAttribute('color-mode', mode);
    const btn = document.createElement('button');
    btn.className = mode;

    btn.addEventListener('click', () => {
      mode = mode === 'dark' ? 'light' : 'dark';
      btn.className = mode;
      document.documentElement.setAttribute('color-mode', mode);
    })
    return {
      btn,
      getMode: () => mode
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance
    },
  }
})();