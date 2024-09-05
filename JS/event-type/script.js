const submitBtn = document.querySelector('.submit-btn');

//mouse event
// submitBtn.addEventListener('click', handleEvent);

// submitBtn.addEventListener('dblclick', handleEvent);

// submitBtn.addEventListener('mousedown', handleEvent);

// submitBtn.addEventListener('mouseup', handleEvent);

// submitBtn.addEventListener('mouseenter', handleEvent);

// submitBtn.addEventListener('mouseleave', handleEvent);

// submitBtn.addEventListener('mousemove', handleEvent);

// function handleEvent(e){
//     e.preventDefault();
//     console.log(`Event Type: ${e.type}`)
// }

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

form.addEventListener('submit', handleEvent);

// emailInput.addEventListener('keydown', handleEvent);

// emailInput.addEventListener('keyup', handleEvent);

emailInput.addEventListener('keypress', handleEvent);

emailInput.addEventListener('focus', handleEvent);

emailInput.addEventListener('blur', handleEvent);

emailInput.addEventListener('cut', handleEvent);

emailInput.addEventListener('paste', handleEvent);

emailInput.addEventListener('input', handleEvent);

function handleEvent(e){
    console.log(`Event Type: ${e.type}`)

    if (e.type === 'submit'){
        e.preventDefault();
    }

    title.innerText = e.target.value;
}