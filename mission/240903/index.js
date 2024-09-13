const a = 1;
const b = 2;

// if-else
if (a%2 === 1) {
    console.log(`${a}는 홀수입니다.`);
} else if (a%2 === 0) {
    console.log(`${a}는 짝수입니다.`);
} else {
    console.log(`홀수도 짝수도 아닙니다.`);
}

const age = 28;
// switch
switch (true) {
    case (age >= 0 && age < 10):
        console.log('아기입니다.');
        break;
    case (age >= 10 && age < 20):
        console.log('청소년입니다.');
        break;
    case (age >= 20 && age < 30):
        console.log('청년입니다.');
        break;
    default:
        console.log('늙은이입니다.');
}

// for
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(`합계는 ${sum}입니다.`);

// while
sum = 0;
let j = 0;
while (j < 5) {
    sum += j;
    j++;
}
console.log(`합계는 ${sum}입니다.`);

