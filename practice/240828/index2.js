const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getAge = (cur, n) => {
    let curAge = parseInt(cur,10);
    let year = parseInt(n, 10);
    let futureAge = curAge + year;
    console.log(`${year}년 후 나이는 ${curAge+year}입니다.`);
    if(futureAge >= 20) {
        console.log(`${year}년 후에 성인입니다.`)
    } else {
        console.log(`${year}년 후에 성인이 아닙니다.`)
    }
}

let input;

rl.on('line', function(line) {
    input = line.toString().split(' '); 
     rl.close();
}).on("close", function() {
    //문제 풀이 로직
    getAge(input[0], input[1]);
    process.exit();
});