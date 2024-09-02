let val;
val = String(111);
val = String(false);
val = String(new Date());
val = String([1,2,3,4]);
val = (5).toString(2);
val = (true).toString();

// string => number
val = Number('1');
val = Number(true);

val = parseInt('111.40');
val = parseFloat('111.40');

console.log(val);
console.log(typeof val);
console.log(val.length);

/// js 자체에 의해 자동으로 변환

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);