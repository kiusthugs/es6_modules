import {Car} from './car.js'

export class Wishlist {
    constructor(list, nextId) {
        this.list = [],
        this.nextId = 0
    }

    add(make, model, year) {
        let newCar = new Car(++this.nextId, make, model, year) 
        console.log(newCar) 
        this.list.push(newCar)
        console.log(this.list)
    }

    remove(carId) {
        for (let i = 0; i < this.list.length; i++) {
            if (carId === this.list[i].id) {
                this.list.splice(i, 1)
            }
        }
        console.log(this.list)
    }
}