let val;

val = document;
val = document.baseURI; // 웹 페이지 절대 URI 반환
val = document.head;
val = document.body;
val = document.doctype;
val = document.cookie;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;

val = document.links;

val = document.scripts;

// document method
// document.querySelector(선택자) > 첫번째 태그
// document.getElementById(요소아이디) > 태그 반환

console.log(document.querySelector(script));

const Container = document.getElementById('container');

Container.style.fontSize = '10px';
Container.style.display = 'none';

Container.textContent = 'text';
Container.innerText = 'text';
Container.innerHTML = '<span>Inner Html</span>';

const Container2 = document.querySelector('.container2');

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[0].style.color = 'blue';
// items[3].textContent = 'Hi';

let list = document.getElementsByTagName('li'); // 배열 아님

list = Array.from(list)

const items = documents.querySelectorAll('ul.list-group li.list-group-item');

items.forEach(function(item, index){
    item.textContent = `${index}. List`
})

const liOdd =
document.querySelectorAll('li:nth-child(odd)');
const liEven =
document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item, index){
    item.style.backgroundColor = 'lightgray';
})

for (let i = 0; i < liEven.length; i++){
    liEven[i].style.backgroundColor = 'lightblue';
}





