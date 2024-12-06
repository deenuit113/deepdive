
// Boolean
let boolean: boolean
let fasleBoolean: boolean = false;

// Number
let number: number
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string
let firstName: string = 'Doe';


// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['john', 'doe'];
let names2: Array<string> = ['john', 'doe'];

// 여러 타입을 가지는 배열 (유니언 타입)
let array1: (string | number)[] = ['john', 1, 2];
let array2: Array<string | number> = ['john', 2, 3];

// 여러 타입을 단언 X any
let someArray: any[] = ['John', 1, {}, [], false];

// 읽기 전용 배열 생성
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// Tuple
// 튜플은 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이
let tuple1: [string, number]
tuple1 = ['a', 1];

// 튜플 타입의 배열 (2차원 배열)
let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']]

// Any
let any: any = 'abc'
any = 1
any = []

// Unknown
// 알 수 없는 타입을 의미하며, 어떠한 값도 할당 가능
// 하지만 unknown을 다른 타입에는 할당 불가능
let unknown: unknown = 123
let string1: number = unknown

// Object
// typeof 연산자가 object로 변환하는 모든 타입
let obj: object = {}
let arr: object = []
let func: object = function() {}
let nul: object = null
let date: object = new Date()

let ob1: object = {
    id: 1,
    title: 'title1',
}

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function(x, y) {
    return x * y;
}

let func2: () => void;
func2 = function() {
    console.log('hi');
}

// Null, Undefined
let number1: number = undefined;
let string9: string = null;
let object: {a: 1, b: false } = undefined;
let array: any[] = null;

let void2: void = undefined;


// never
// 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용
function keepProcessing(): never {
    while(true) {
        console.log("")
    }
}

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}