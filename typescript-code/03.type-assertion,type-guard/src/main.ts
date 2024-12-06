interface Foo {
    bar: number;
    bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

// const bodyElement = document.querySelector('body') as HTMLBodyElement;
const bodyElement = document.querySelector('body');
// bodyElement!.innerText = 'hello'; // undefined 나 null이 절대 아님.
if (bodyElement) { // Type Guard
    bodyElement.innerText = 'hello';
}

function func(arg: string | null) {
    if(arg) {
        return arg.toLowerCase();
    }
}

func('hello');
func(null);