"use strict";
// Boolean
let boolean;
let fasleBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['john', 'doe'];
let names2 = ['john', 'doe'];
// 여러 타입을 가지는 배열 (유니언 타입)
let array1 = ['john', 1, 2];
let array2 = ['john', 2, 3];
// 여러 타입을 단언 X any
let someArray = ['John', 1, {}, [], false];
// 읽기 전용 배열 생성
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// Tuple
// 튜플은 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이
let tuple1;
tuple1 = ['a', 1];
// 튜플 타입의 배열 (2차원 배열)
let users;
users = [[1, 'John'], [2, 'Doe']];
