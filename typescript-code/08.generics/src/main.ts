function getArrayLength(arr: number[]): number {
    return arr.length;
}

const array1 = [1, 2, 3, 4, 5];
getArrayLength(array1);

function getArrayLength1(arr: number[] | string[]): number {
    return arr.length;
} 

const array2 = ['a', 'b', 'c']
getArrayLength1(array2);

function getArrayLength2(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}

function getArrayLength3<T>(arr: T[]): number {
    return arr.length;
}

const array3 = [1, 2, 3];
getArrayLength3<number>(array3);

interface Vehicle<T> {
    name: string;
    color: string;
    option: T;
}

const car: Vehicle<{price: number}> = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000,
    }
}

const bike: Vehicle<boolean>= {
    name: 'bike',
    color: 'blue',
    option: true,
}

const makeArr = <T>(x: T) => {
    return [x];
} 

const array = makeArr(5);
const array6 = makeArr('a');

const makeArr1 = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y];
}

const array7 = makeArr1<number, number>(4, 5);

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

const user1 = makeFullName({ firstName: 'John', lastName: 'Doe', location: "Seoul"})