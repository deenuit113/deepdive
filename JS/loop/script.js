// Loop

// 코드 블록 여러 번 실행

// For => 코드 블록 여러 번 반복
 
// For/In => 객체의 속성을 따라 반복

// While => 지정된 조건이 True 코드 블록 반복

// Do/While => 지정된 조건이 True, Do

for ( let i = 0; i < 10; i++) {
    if(i === 3){
        console.log("It is 3");
        continue;
    }
    if(i === 5){
        console.log("It is 5");
        break;
    }
    console.log("Number" + i);
}

const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}

// while 지정된 조건이 true 코드 블록 반복
let i = 0;
while (i < 10){
    console.log("Number" + i);
    i++;
}

// do/while
let j = 0;
do {
    console.log("Number " + j);
    j++;
}
while (j < 10)

const locations = ['서울','부산','경기도','대구'];

for(let location of locations){
    console.log(location);
}

locations.forEach(function(location, index, array) {
    console.log(`${index}: ${location}`);
    console.log(array);
});

locations.map(function(location, index, array) {
    console.log(`${index}: ${location}`);
    console.log(array);
});