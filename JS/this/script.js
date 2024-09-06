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

const audio2 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(category => {
            console.log(`title: ${this.title},
                category: ${category}
             `);
        });
    }
};

audio2.displayCategories();

const audio3 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(category => {
            console.log(this);
        });
    }
};
// 화살표 함수 안의 this는 항상 상위 스코프의 this를 참조
// lexical this

audio3.displayCategories();