// lazyload 또는 무한 스크롤에 사용 가능
const observer = new IntersectionObserver((items, observer) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      // logic
      item.target.setAttribute('src', item.target.dataset.lazy);
      observer.unobserve(item.target);
    }
  })
})

document.querySelectorAll('elem_be_observed').forEach(item => {
  observer.observe(item);
})