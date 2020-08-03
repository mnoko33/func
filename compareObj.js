// 두 개의 Object가 갖은지 비교하는 함수

function compareObj(obj1, obj2) {
    function getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    if (getType(obj1) !== getType(obj2)) return false;

    if (getType(obj1) === 'Array') {
        const N = obj1.length;
        for (let i = 0; i < N; i++) {
            if (!compareObj(obj1[i], obj2[i])) return false;
        }

        return true;
    }

    if (getType(obj1) === 'Object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        
        if (!compareObj(keys1, keys2)) return false;

        for (let key of keys1) {
            if (!compareObj(obj1[key], obj2[key])) return false;
        }

        return true;
    }

    return obj1 === obj2;
}
