// Extends vs Implements
class Car {
    mileage = 0;
    price = 100;
    color = 'white';
    drive() {
        return 'drive';
    }

    brake() {
        return 'brake';
    }
}

class Ford implements Car {
    mileage =  1;
    price = 2;
    color = 'black';
    drive () {
        return 'drive';
    }

    brake() {
        return 'brake';
    }
}

const myFordCar = new Ford();