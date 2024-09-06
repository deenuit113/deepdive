const arr1 = [1,4,9,16];

// 원본 배열 그대로
// 반환
// map

const maparr = arr1.map(x => x * 2);

console.log(maparr); // [2, 8, 18, 32]

// item : 배열의 요소, index: 배열 인덱스, array: 원본 배열
const map1 = arr1.map(function (item, index, array){
    console.log(this);
}, {a: 'a'});

// filter 주어진 함수 테스트 통과하는 모든 요소를 "새로운 배열"로 반환

const words = ['spray', 'limit', 'elite', 'destruction'];

const result = words.filter((word, index, array) => word.length > 6);
console.log(result);

// 



