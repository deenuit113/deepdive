// Function Expression 호이스팅 영향 X
alert(foo());
var foo = function () {return 5;}
// Error! foo wasn't loaded yet

// Function Declaration 호이스팅 영향 O
alert(foo());
function foo() {return 5;}

