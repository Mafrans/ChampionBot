const { Class } = require('./classes');

class Champion {
    name: string = "";
    surname: string = "";
    class: object = Class.WARRIOR;
    constructor() {
    }
}
const Stats = {};

module.exports = {
    Champion,
    Stats,
};