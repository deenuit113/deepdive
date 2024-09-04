let val;
const list = 
    document.querySelectorAll('.list-group');

const listItem = document.querySelector('.list-group-item');

val = list;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3];

// nodeType
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document node
// 10 - Doctype node

// children element nodes 변환
val = list.children;
val = list.children[1];
list.children[1].textContent = 'hi';

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.previousSibling;

// val = list.childNodes => 배열 ? 
// Iterable (반복 가능한) collection
// 유사 배열 객체

// O 
// for ... of => 배열을 순환할 때
// foreach

// X
// for ... in => 객체를 순환할 때
// map
// filter

console.log(val);

