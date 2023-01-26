import Spaceships from "./Spaceship";

export class GrassSpaceship extends Spaceships {
    protected _type: string = 'Grass'

    constructor(identificator: string){
        super(identificator)
        this._agility = 18;
        this._attack = 5;
        this._defense = 12;
    }
}

export class WaterSpaceship extends Spaceships {
    protected _type: string = 'Water'

    constructor(identificator: string){
        super(identificator)
        this._agility = 9;
        this._attack = 11;
        this._defense = 32;
    }
}

export class FireSpaceship extends Spaceships {
    protected _type: string = 'Fire'

    constructor(identificator: string){
        super(identificator)
        this._agility = 14;
        this._attack = 23;
        this._defense = 8;
    }
}