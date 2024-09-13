console.log(a);
var a = 2;
console.log(a);

func();
function func() {
    console.log('함수 호이스팅');
};

// 실행 결과:
// undefined
// 2
// 함수 호이스팅
/*
호이스팅이란 "끌어올린다" 라는 뜻으로 변수 및 함수 선언문이 스코프 내의 최상단으로 끌어올려지는 현상을 말합니다. 여기서 주의할 점은 **"선언문"** 이라는 것이며 "대입문"은 끌어올려지지 않습니다.

> 모범 답변
[참고 링크] - [https://medium.com/@limsungmook/자바스크립트는-왜-프로토타입을-선택했을까-997f985adb42](https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42)

실행 컨텍스트 생성 시 렉시컬 스코프 내의 선언이 끌어올려지는 게 호이스팅입니다.
*/