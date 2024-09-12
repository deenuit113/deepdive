// 클로저를 생성하는 외부 함수
function createCounter() {
    // 외부 함수의 지역 변수
    let count = 0;
    
    // 내부 함수: 외부 함수의 변수에 접근 가능
    function increment() {
      count += 1;
      return count;
    }
    
    // 내부 함수를 반환하여 클로저 생성
    return increment;
  }
  
  // createCounter를 호출하여 클로저 생성
  const counter = createCounter();
  
  // 클로저를 통해 외부 함수의 변수에 접근 및 수정
  console.log(counter()); // 출력: 1
  console.log(counter()); // 출력: 2
  console.log(counter()); // 출력: 3