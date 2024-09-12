const ob1 = { a: 1, b: 2};
const ob2 = { a: 1, b: 2};

console.log(ob1 === ob2); // false

// 깊은 비교 객체의 경우 값으로 비교함

console.log(JSON.stringify(ob1) === JSON.stringify(ob2));