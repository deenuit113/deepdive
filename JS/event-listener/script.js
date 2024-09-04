// 1 자바스크립트로 프로퍼티 등록

window.onload = function() {
    // predefined process
    let text = document.getElementById("text");
    text.innerHTML = "HTML 문서 load";
}

// 2 HTML 태그에 속성으로 등록

// 3 addEventListener 메소드 사용

// element.addEventListener('click', () => {})

const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('a element clicked');
});

const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click');

function handleClick(event) {
    let val;
    val = event;
    console.log(val);
}