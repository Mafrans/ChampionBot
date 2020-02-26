import { Classes } from './classes';
import { Races } from './races';

class Champion {
    name: string = "";
    surname: string = "";
    class: object = Classes.WARRIOR;
    race: object = Races.HUMAN;
    level: number = 1;

    stats: object [];
    constructor() {
    }
}
const Stats = {};

module.exports = {
    Champion,
    Stats,
};