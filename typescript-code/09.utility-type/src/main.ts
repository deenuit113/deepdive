// Partial, Pick, Omit, Exclude, Required

// Partial => 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
    email: string;
    address: string;
}

type MyEmail = Partial<Address>

const me: MyEmail = {};
const you: MyEmail = { email: "abc@example.com"};
const all: MyEmail = { email: "abc@example.com", address: "abc"};

// Pick: 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의합니다.
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type MyTodo = Pick<Todo, "title" | "completed">

const todo: MyTodo = {
    title: "clean room",
    completed: false,
}

// Omit: 특정 속성만 제거한 타입을 정의
type MyTodo1 = Omit<Todo, "description">
const todo1: MyTodo1 = {
    title: 'clean room',
    completed: false,
    createdAt: 12321312312,
}

// Required
type User = {
    firstName: string;
    lastName?: string;
}

let firstUser: User = {
    firstName: "John"
}

let secondUser: Required<User> = {
    firstName: "John",
    lastName: "Doe"
}

// Record
interface CatInfo {
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris" | "luna"
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    luna: { age: 8, breed: "Siamese" },
}

// ReturnType
type T0 = ReturnType<( ) => string>
function fn(str: string) {
    return str
}

const a: ReturnType<typeof fn> = 'string';