// same input > same output

const add = (x, y) => x + y;
console.log(add(11,20));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("John", "Doe"));

// No Side Effect
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(10, 20));


let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);

const pureNumberUp = (num) => num += 1;


const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray, newItem) => {
    originalArray.push(newItem); // 원본 배열에 추가
    return originalArray;
}

console.log(addItemToArray(alphabetArray, 'C'));

// > pure function
const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem];
};

console.log(pureAddItemToArray(alphabetArray, 'C'));