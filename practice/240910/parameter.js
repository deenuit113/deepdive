function sayHello(name = "minsu") {
    console.log(`Hello! ${name}`);
}
  
sayHello("everybody");
sayHello();

function printArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
  
printArguments("Young", "Mark", "Koby");

function printList(first, second, ...others) {
    console.log(`첫번째: ${first}`);
    console.log(`두번째: ${second}`);
    for (const arg of others) {
        console.log(`나머지: ${arg}`);
    }
}
  
printList("Javascript", "Java", "Python", "C", "C++");


const getAddTwo = (number) => {
    return number + 2;
};
  
myBtn.addEventListener("click", () => {
    console.log("button is clicked!");
});

