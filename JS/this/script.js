// This 참조

// Method this => 해당 객체 참조

const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    },
}

audio.play();

audio.stop = function() {
    console.log('stop this', this);
};

audio.stop();

// Function this => window 객체
function playAudio() {
    console.log(this);
}

playAudio();

// Constructor (생성자) 함수 this => 빈 객체

function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio1 = new Audio('a');