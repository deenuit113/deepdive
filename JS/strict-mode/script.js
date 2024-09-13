function sum (a,b){
    "use strict";
    return a + b;
}

// class는 자동으로 strict mode
// 'use strict'; > greating is not undefined
let greeting = 'hello';
greating = 'hi';

console.log(greeting); // hi

console.log(greeting, window.greating); // hello hi

const obj = {
    readOnly: 7
};

Object.defineProperty(obj, "readOnly",
    { writable: false, value: 7 }
)

console.log(obj);

obj.readOnly = 10;

console.log(obj); // { readOnly: 7 }


// 'use strict'; > syntax error: duplicate parameter
function add (a, a, b) {
    return a + a + b;
}

// 'use strict'; > Uncaught error
"string".prop = 7;
console.log("string".prop) // undefined

// 'use strict'; window undefined
function sum (a, b){ // undefined
    console.log(this);
    return a + b;
}

console.log(this); // window
sum.bind(1, 2); // window