// 두 개의 Object가 갖은지 비교하는 함수

function compareObj(x, y) {
  const typeX = typeof x;
  const typeY = typeof y;
  if (typeX !== typeY) return false;
  if (typeX !== 'object') return x === y;
  
  const entriesX = Object.entries(x);
  const entriesY = Object.entries(y);
  if (entriesX.length !== entriesY.length) return false;
  for (let i = 0; i < entriesX.length; i++) {
    const [k, v] = entriesX[i];
    if (!compareObj(v, y[k])) return false;
  }
  return true;
}