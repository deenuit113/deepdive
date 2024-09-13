const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getAge = (cur) => {
    let curAge = parseInt(cur,10);
    for(let year = 1; year <= 20; year++){
        let futureAge = curAge + year;
        if(futureAge === 20) {
            console.log(`${year}년 후 성인이 되었습니다.`);
            break;
        } else {
            console.log(`${year}년 후 나이는 ${futureAge}입니다.`);
            continue;
        }
        console.log("안녕하세요.")
    }
}

let input;

rl.on('line', function(line) {
    input = line.toString().split(' '); 
     rl.close();
}).on("close", function() {
    //문제 풀이 로직
    getAge(input[0]);
    process.exit();
});