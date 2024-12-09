// public
// private: 클래스 내에서만
// protected: 상속받은 클래스 내에서도 가능

class PostA {
    public id: number;
    protected title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}

class PostB extends PostA {
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}`;
    }
}

let post = new PostA(1, "title 1");
