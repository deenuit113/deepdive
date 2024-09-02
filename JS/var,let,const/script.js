// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = 'how are you';
// console.log(greeting);

// 중복 선언 O, 재할당 O

// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi';

//greeting = 'how are you';
// console.log(greeting);

// 중복 선언 X, 재할당 O

// const greeting = 'hello';
// console.log(greeting);

// 중복 선언 X, 재할당 X
// 배열, 객체의 값 변경 가능

// var = > 함수 레벨 스코프
// let/const => 블록 레벨 스코프

// function func() {
//     if(true) {
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();
// console.log(a);

// function func() {
//     if(true) {
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();
// console.log(a);

// 호이스팅

// console.log(greeting);
// var greeting = 'hello';

// 변수 생성 =>
//     1. 선언 단계
//     (코드가 실행되기 전에 현재 범위 맨 위로 호이스팅)
//      var는 선언 단계에서 undefined 할당
//      TDZ Temporal Dead zone
//     2. 할당 단계


// func();

// function func() {
//     console.log("hoisting test");
// }

// var/function ==> hoisting O
// let/const ==> hoisting

console.log(greeting);
const greeting = 'hello';

