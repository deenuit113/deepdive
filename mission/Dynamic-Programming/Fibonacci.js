function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    // 배열을 생성하여 피보나치 수를 저장
    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;
  
    // 반복문을 통해 피보나치 수를 계산
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    // n번째 피보나치 수 반환
    return fib[n];
}

  console.log(fibonacci(10));