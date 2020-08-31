// 매개변수로 주어진 Object를 재귀적으로 deepcopy하는 함수

function deepcopy(obj) {
  const constructor = obj.constructor;
  if (constructor === Array) {
    const result = [];
    for (let x of obj) {
      result.push(deepcopy(x));
    }
    return result;
  }
  
  if (constructor === Object) {
    const result = {};
    for (let key in obj) {
      result[key] = deepcopy(obj[key]);
    }
    return result;
  }

  return obj;
}