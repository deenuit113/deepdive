// 클래스 정의
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    // 메소드 정의
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} is now going ${this.speed} km/h.`);
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} ${this.model} slowed down to ${this.speed} km/h.`);
    }

    getInfo() {
        return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
}

// 인스턴스 생성
const myCar = new Car("Toyota", "Corolla", 2022);
const yourCar = new Car("Honda", "Civic", 2023);

// 메소드 호출
console.log(myCar.getInfo());
myCar.accelerate(50);
myCar.accelerate(30);
myCar.brake(20);

console.log(yourCar.getInfo());
yourCar.accelerate(40);
yourCar.brake(10);

// 속성 접근
console.log(`My car's brand: ${myCar.brand}`);
console.log(`Your car's model: ${yourCar.model}`);