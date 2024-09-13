const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map
const squared = numbers.map(num => num ** 2);
console.log("Squared numbers:", squared);

// Filter
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// 복합 사용
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num ** 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Result of combined operations:", result);