// multidimensional-nested-processing.js

// 다차원 배열 처리 함수
function processMultidimensionalArray(arr) {
    function processArray(subArr, depth = 0) {
      subArr.forEach((item, index) => {
        if (Array.isArray(item)) {
          console.log(`${' '.repeat(depth * 2)}Subarray at depth ${depth}:`);
          processArray(item, depth + 1);
        } else {
          console.log(`${' '.repeat(depth * 2)}Item at depth ${depth}: ${item}`);
        }
      });
    }
  
    processArray(arr);
  }
  
  // 중첩된 객체 처리 함수
  function processNestedObject(obj) {
    function processObj(subObj, depth = 0) {
      Object.keys(subObj).forEach(key => {
        const value = subObj[key];
        if (typeof value === 'object' && value !== null) {
          console.log(`${' '.repeat(depth * 2)}${key}:`);
          processObj(value, depth + 1);
        } else {
          console.log(`${' '.repeat(depth * 2)}${key}: ${value}`);
        }
      });
    }
  
    processObj(obj);
  }
  
  // 다차원 배열 예제
  const multiArray = [
    1,
    [2, 3],
    [4, [5, 6]],
    [7, [8, [9, 10]]]
  ];
  
  console.log("Processing multidimensional array:");
  processMultidimensionalArray(multiArray);
  
  // 중첩된 객체 예제
  const nestedObject = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: {
        name: "USA",
        code: "US"
      }
    },
    hobbies: ["reading", "swimming", { sport: "football", level: "amateur" }]
  };
  
  console.log("\nProcessing nested object:");
  processNestedObject(nestedObject);