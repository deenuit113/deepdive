// 얕은 복사

const aArray = [1,2,3];

// spread operator => 얕은 복사

const bArray = [...aArray, 4];
console.log('aArray: ', aArray);
console.log('bArray: ', bArray);
console.log('aArray === bArray', aArray === bArray);

// Object.assing() => 얕은 복사
const cArray = Object.assign([], bArray);
console.log('cArray: ', cArray);
console.log('bArray === cArray', bArray === cArray);

// depth
cArray.push([5,6,7]);
console.log('cArray: ', cArray);
const dArray = [...cArray, 10];
console.log('dArray: ', dArray);
dArray[4].push(8);
console.log('cArray: ', cArray);
console.log('dArray: ', dArray);

// shallow copy
// spread operator, Object assign
// Array.from(), slice

// 얕은 동결 freeze
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": {"a": 1, "b": 2},
}

Object.freeze(aObject);
aObject.a = "c";
console.log('aObject', aObject);

// 깊은 복사

// const newAObject = JSON.parse(JSON.stringify(aObject));

console.log('aoObject: ', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
console.log('aoObject: ', aObject);
console.log('newAObject', newAObject);