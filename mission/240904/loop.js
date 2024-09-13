const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// For
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("For:", sum);

// While
sum = 0;
let index = 0;
while (index < array.length) {
    sum += array[index];
    index++;
}
console.log("While:", sum);

// Do While
sum = 0;
index = 0;
do {
    sum += array[index];
    index++;
} while (index < array.length);
console.log("Do While:", sum);

// For In
sum = 0;
for (let i in array) {
    sum += array[i];
}
console.log("For In:", sum);

// For Of
sum = 0;
for (let value of array) {
    sum += value;
}
console.log("For of:", sum);

// forEach
sum = 0;
array.forEach(element => {
    sum += element;
});
console.log("forEach:", sum);

// map
sum = 0;
array.map(element => {
    sum += element;
});
console.log("map:", sum);

// reduce
sum = array.reduce((acc, current) => acc + current, 0);
console.log("reduce:", sum);