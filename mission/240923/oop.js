// 클래스 정의: Car 클래스 생성
class Car {
    // 생성자: 객체 초기화
    constructor(brand, model, year) {
      // 속성(프로퍼티) 정의
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    // 메소드 정의
    accelerate(amount) {
      this.speed += amount;
      console.log(`${this.brand} ${this.model}의 속도가 ${this.speed}km/h로 증가했습니다.`);
    }
  
    brake(amount) {
      this.speed = Math.max(0, this.speed - amount);
      console.log(`${this.brand} ${this.model}의 속도가 ${this.speed}km/h로 감소했습니다.`);
    }
  
    // 정적 메소드: 클래스 레벨에서 호출 가능
    static compareAge(car1, car2) {
      return car1.year - car2.year;
    }
  }
  
  // 상속: ElectricCar 클래스가 Car 클래스를 상속
  class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
      // 부모 클래스의 생성자 호출
      super(brand, model, year);
      this.batteryCapacity = batteryCapacity;
    }
  
    // 메소드 오버라이딩
    accelerate(amount) {
      super.accelerate(amount);
      this.batteryCapacity -= amount * 0.1;
      console.log(`배터리 잔량: ${this.batteryCapacity.toFixed(1)}%`);
    }
  }
  
  // 객체 생성
  const myCar = new Car("Toyota", "Corolla", 2020);
  const myElectricCar = new ElectricCar("Tesla", "Model 3", 2022, 100);
  
  // 메소드 호출
  myCar.accelerate(30);
  myElectricCar.accelerate(40);
  
  // 정적 메소드 호출
  console.log(`두 차의 연식 차이: ${Car.compareAge(myElectricCar, myCar)}년`);