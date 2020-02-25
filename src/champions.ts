import { Classes } from './classes';

class Champion {
    name: string = "";
    surname: string = "";
    class: object = Classes.WARRIOR;
    constructor() {
    }
}
const Stats = {};

module.exports = {
    Champion,
    Stats,
};