// Array Methods
console.log("Array Methods:");

// 1. map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("map():", doubled);

// 2. filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter():", evenNumbers);

// 3. reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", sum);

// 4. forEach()
console.log("forEach():");
numbers.forEach(num => console.log(num));

// 5. find()
const found = numbers.find(num => num > 3);
console.log("find():", found);

// 6. some()
const hasEven = numbers.some(num => num % 2 === 0);
console.log("some():", hasEven);

// 7. every()
const allPositive = numbers.every(num => num > 0);
console.log("every():", allPositive);

// 8. includes()
const includesThree = numbers.includes(3);
console.log("includes():", includesThree);

// 9. join()
const joined = numbers.join(", ");
console.log("join():", joined);

// 10. slice()
const sliced = numbers.slice(1, 4);
console.log("slice():", sliced);

console.log("\nString Methods:");

// String Methods
const str = "Hello, World!";

// 1. toLowerCase()
console.log("toLowerCase():", str.toLowerCase());

// 2. toUpperCase()
console.log("toUpperCase():", str.toUpperCase());

// 3. trim()
const paddedStr = "   Trimmed   ";
console.log("trim():", paddedStr.trim());

// 4. split()
console.log("split():", str.split(", "));

// 5. charAt()
console.log("charAt(7):", str.charAt(7));

// 6. indexOf()
console.log("indexOf('o'):", str.indexOf('o'));

// 7. lastIndexOf()
console.log("lastIndexOf('o'):", str.lastIndexOf('o'));

// 8. substring()
console.log("substring(7, 12):", str.substring(7, 12));

// 9. replace()
console.log("replace():", str.replace("World", "JavaScript"));

// 10. startsWith()
console.log("startsWith('Hello'):", str.startsWith("Hello"));

// 11. endsWith()
console.log("endsWith('!'):", str.endsWith("!"));

// 12. includes()
console.log("includes('World'):", str.includes("World"));