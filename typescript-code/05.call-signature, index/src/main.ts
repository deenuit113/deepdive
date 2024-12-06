interface getLikeNumber {
    // 호출 시그니처
    (like: number) : number;
}

interface Post1 {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}

const post1: Post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like;
    }
}

post1.getLikeNumber(1);

// 인덱스 시그니처

interface Post2 {
    [key: string]: unknown; 
    id: number;
    title: string;
}

const post2: Post2 = {
    id: 2,
    title: 'post 2',
}

post2['description'] = 'post2 description';
post2['pages'] = 300;

// 배열 인덱스 시그니처

interface Names {
    [item: number]: string;
}

const userNames = ['John', 'Kim', 'Joe'];

userNames[0] === 'John';
userNames[1] === 'Kim';