// interface People {
//     name: string;
//     age: number;
// }

type People = {
    name: string;
    age: number;
}

const me: People = {
    name: 'john',
    age: 50,
}

// interface Animal {
//     name: string;
// }

// interface Bear extends Animal { 
//     honey: boolean;
// }

type Animal = {
    name: string;
}
//Intersection Operator
type Bear = Animal & {
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}

// 선언 병합 (Declaration Merging) type은 안 됨
interface Animal1 {
    name: string;
}

interface Animal1 {
    honey: boolean;
}

const bear2: Animal1 = {
    name: 'honey bear',
    honey: true
}
