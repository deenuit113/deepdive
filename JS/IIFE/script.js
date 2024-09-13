(
    function() {
        var aName = 'Barry';
    }
)();
// IIFE 내부에서 정의된 변수 외부 범위 접근 X
console.log(aName);

var result = (
    function () {
        var name = "Barry";
        return name;
    }
)()
console.log(result);

const minus = function(a, b) {
    return a - b;
};

(function (a, b) {
    return a - b;
}) (1, 2);

// 이름 없는 함수 두 가지 조건
// 1. 함수를 할당받을 변수 지정
// 2. 함수를 즉시 호출

const Score = () => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
}

console.log(typeof Score) // function
console.log(Score);

const ScoreIIFE = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})()

console.log(typeof ScoreIIFE) // object 함수가 실행된 결과만 저장
console.log(Score);



