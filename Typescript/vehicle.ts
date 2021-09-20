interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(value: number): void;

}
class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    //construtor declaration(*)
    constructor();
    constructor(name: string, speed: number, gears: number);

    //construtor implementation(1)
    constructor(name?: string, speed?: number, gears?: number){
          this.name = name;
          this.speed = speed;
          this.gears = gears;  
    }

    applyBrakes(value: number): void {
        this.speed -= value;
    }
}

let car1: Vehicle = new Car();
car1.name = "BMW"; car1.speed=200; car1.gears=7;
console.log("Car1", car1);
car1.applyBrakes(100);
console.log("Car1", car1);

let car2: Vehicle = new Car("Audi", 150, 7);
console.log("Car2", car2);
