"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spaceships {
    constructor(identificator) {
        this._agility = 5;
        this._attack = 5;
        this._defense = 5;
        this._idetificator = identificator;
    }
    takeOff() {
        console.log(`A nave ${this._idetificator} está levantando voo!`);
    }
    land() {
        console.log(`A nave ${this._idetificator} está pousando!`);
    }
}
exports.default = Spaceships;
