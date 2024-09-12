// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable) {
//         console.log('Outer function: ' + outerVariable);
//         console.log('Inner function: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');

// console.log(newFunction);
// console.log(newFunction());

// newFunction('inside');


let a = 'a';



function functionA() {
    function functionB() {
        let c = 'c';
        console.log(a,b,c);
    }

    let b = 'b';
    console.log(a,b);
    functionB();
}

functionA();