class Car {
    //construtor implementation(1)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(value) {
        this.speed -= value;
    }
}
let car1 = new Car();
car1.name = "BMW";
car1.speed = 200;
car1.gears = 7;
console.log("Car1", car1);
car1.applyBrakes(100);
console.log("Car1", car1);
let car2 = new Car("Audi", 150, 7);
console.log("Car2", car2);
