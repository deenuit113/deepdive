// 캡슐화: Book 클래스는 책의 속성과 메서드를 하나의 단위로 묶음
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    // 추상화: 대출 과정을 단순화하여 checkout 메서드로 표현
    checkout() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }

    // 추상화: 반납 과정을 단순화하여 returnBook 메서드로 표현
    returnBook() {
        this.isAvailable = true;
    }
}

// 캡슐화: Library 클래스는 도서관의 속성과 메서드를 하나의 단위로 묶음
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // 추상화: 책 추가 과정을 addBook 메서드로 단순화
    addBook(book) {
        this.books.push(book);
    }

    // 추상화: 책 검색 과정을 findBook 메서드로 단순화
    findBook(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    // 다형성: checkoutBook 메서드는 다양한 Book 객체에 대해 동작
    checkoutBook(isbn) {
        const book = this.findBook(isbn);
        if (book && book.checkout()) {
            console.log(`책 "${book.title}"이(가) 대출되었습니다.`);
            return true;
        }
        console.log("대출할 수 없습니다. 책을 찾을 수 없거나 이미 대출 중입니다.");
        return false;
    }

    // 다형성: returnBook 메서드는 다양한 Book 객체에 대해 동작
    returnBook(isbn) {
        const book = this.findBook(isbn);
        if (book) {
            book.returnBook();
            console.log(`책 "${book.title}"이(가) 반납되었습니다.`);
            return true;
        }
        console.log("반납할 수 없습니다. 책을 찾을 수 없습니다.");
        return false;
    }

    // 추상화: 가용 도서 목록 조회 과정을 listAvailableBooks 메서드로 단순화
    listAvailableBooks() {
        const availableBooks = this.books.filter(book => book.isAvailable);
        console.log("대출 가능한 책 목록:");
        availableBooks.forEach(book => console.log(`- ${book.title} (${book.author})`));
    }
}

// 상속: 필요한 경우 Book 클래스를 확장하여 하위 클래스를 만들 수 있음
// 예: class EBook extends Book { ... }

// 시스템 사용 예시
const myLibrary = new Library("동네 도서관");

const book1 = new Book("해리 포터와 마법사의 돌", "J.K. 롤링", "9788983920989");
const book2 = new Book("1984", "조지 오웰", "9788937460777");
const book3 = new Book("어린 왕자", "생텍쥐페리", "9788932917245");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.listAvailableBooks();

myLibrary.checkoutBook("9788983920989");
myLibrary.checkoutBook("9788937460777");

myLibrary.listAvailableBooks();

myLibrary.returnBook("9788983920989");

myLibrary.listAvailableBooks();