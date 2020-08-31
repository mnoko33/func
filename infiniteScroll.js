function infiniteScroll(callback) {
  function getScrollTop() {
    return (window.pageYOffset !== undefined) 
      ? window.pageYOffset 
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  function getDocumentHegith() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  }

  if (getScrollTop() + 50 >= getDocumentHegith() - window.innerHeight) {
    callback();
  }
}