const sum = (x, y) => x + y;

const curriedSum = x => y => x + y;

console.log(sum(2, 3));
console.log(curriedSum(10)(20));

const tenPlus = curriedSum(10)
console.log(tenPlus);
console.log(tenPlus(20));

const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        };
    }
}

const hamburger = makeFood("bread")("ham")("tomato");

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 => `${ingredient1} ${ingredient2} ${ingredient3}`;

function log (date, importance, message) {
    alert(`[${date.getHours()}: ${date.alertDate()}]: ${importance} ${message}`);
}

log(new Date(), "DEBUG", "some debug");

function curry(f) {
    return function(a) {
        return function(b) {
            return function(c){
                return f(a, b, c);
            }
        }
    }
}

const curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("Message");

let logNow = curriedLog(new Date()); // Date는 변하지 않는다
logNow("INFO")("Message");


 