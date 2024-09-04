// Remove

const listParent
    = document.querySelector('ul');
const list
    = document.querySelectorAll('li');

listParent.removeChild(list[1]);

// Replace
// parentNode.replaceChild(newChild, oldChild);


const oldElement = document.getElementById("A");
const newElement = document.createElement('span');
newElement.textContent = "hi";

oldElement.parentNode.replaceChild(newElement, oldElement);