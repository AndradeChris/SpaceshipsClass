export default abstract class Spaceships {
    protected _idetificator: string;
    protected _agility: number = 5;
    protected _attack: number = 5;
    protected _defense: number = 5;

    constructor(identificator: string) {
        this._idetificator = identificator
    }

    public takeOff(): void {
        console.log(`A nave ${this._idetificator} está levantando voo!`)
    }

    public land(): void {
        console.log(`A nave ${this._idetificator} está pousando!`)
    }
}