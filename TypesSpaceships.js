"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireSpaceship = exports.WaterSpaceship = exports.GrassSpaceship = void 0;
const Spaceship_1 = __importDefault(require("./Spaceship"));
class GrassSpaceship extends Spaceship_1.default {
    constructor(identificator) {
        super(identificator);
        this._type = 'Grass';
        this._agility = 18;
        this._attack = 5;
        this._defense = 12;
    }
}
exports.GrassSpaceship = GrassSpaceship;
class WaterSpaceship extends Spaceship_1.default {
    constructor(identificator) {
        super(identificator);
        this._type = 'Water';
        this._agility = 9;
        this._attack = 11;
        this._defense = 32;
    }
}
exports.WaterSpaceship = WaterSpaceship;
class FireSpaceship extends Spaceship_1.default {
    constructor(identificator) {
        super(identificator);
        this._type = 'Fire';
        this._agility = 14;
        this._attack = 23;
        this._defense = 8;
    }
}
exports.FireSpaceship = FireSpaceship;
