let user = {
    name: 'John',
    age: 45,
}

console.log(user.name);
console.log(user.hasOwnProperty('email'));

function Person(name, email, birthday) {
    let person = Object.create(personsPrototype);
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate= new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

Person.prototype.calculateAge = function () {
    const diff = Date.now() = this.birthday.getTime();
    const ageDate= new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('John', 'john@example.com', '7-10-91');
const han = new Person('Han', 'han@abc.com', '2-9-91');

console.log('john', john);

const testArray = [1,2,3];
Array.prototype.push = function(x) {
    return 'pushed valued ' + x;
}
testArray.push(4);
console.log('testArray', testArray);


class Persons {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }

    introduce () {
        return `hello my name is ${this.name}`
    }
}

class Client extends Persons{
    constructor(name, email, birthday, address) {
        super(name, email);
        this.clientNumber = address;
    }
}

const newJohn = new Person('John', 'john@example.com', '7-10-91');
console.log(newJohn);
const clientJohn = new Client('john', 'john@abc.com', '01-222-3333')

console.log(clientJohn.introduce());

class Car {
    constructor(brand){
        this.carName = brand;
    }

    present() {
        return `I have a ${this.carName}`
    }
}

class Model extends Car {
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }

    show() {
        return super.present() + `, it is a ${this.model}` 
    }
}

let mycar = new Model("Ford", "Mustang");
console.log(mycar.show());