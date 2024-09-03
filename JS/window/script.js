const input = prompt();
alert(input);

if(confirm('yes or no')){
    console.log("yes");
} else {
    console.log("no");
}

let val;
val = window.outerHeight();
val = window.outerWidth();

val = window.innerHeight();
val = window.innerWidth();

val = window.scrollY;
val = window.scrollX;

val = window.location;

// window.location.reload();

val = window.history;

val = window.navigator;

val = navigator.geolocation;

console.log(val);

var greeting = 'hello'; // var 변수 ==> window 객체
function doGreeting () {
    return greeting;
}
let greeting1 = 'hello1';
