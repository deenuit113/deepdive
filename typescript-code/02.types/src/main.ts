
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