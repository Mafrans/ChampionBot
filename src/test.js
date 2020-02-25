const assert = require('assert');
const {Champion, Stats} = require('./champions');
const {Gear} = require('./gear.ts');
const {Classes, Skills} = require('./classes');

describe('Champions', () => {
    it('should exist', () => {
        assert(Champion !== null);
        assert(Champion !== undefined);
    });

    it('should be instantiable', () => {
        assert(new Champion() !== null);
    });

    it('should have name', () => {
        const champ = new Champion();
        assert(champ.name !== null);
        assert(champ.name !== undefined);
    });

    it('should have surname', () => {
        const champ = new Champion();
        assert(champ.surname !== null);
        assert(champ.surname !== undefined);
    });

    it('should have class', () => {
        const champ = new Champion();
        assert(champ.class !== null);
        assert(champ.class !== undefined);
    });

    it('should have race', () => {
        const champ = new Champion();
        assert(champ.race !== null);
        assert(champ.race !== undefined);
    });

    it('should have level', () => {
        const champ = new Champion();
        assert(champ.level !== null);
        assert(champ.level !== undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            const champ = new Champion();
            assert(champ.stats !== null);
            assert(champ.stats !== undefined);
        });

        it('should be gettable', () => {
            const champ = new Champion();
            assert(champ.stats[Stats.DAMAGE] !== null);
            assert(champ.stats[Stats.DAMAGE] !== undefined);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            assert(champ.stats[Stats.DAMAGE] === 1);
        });

        it('should be modifiable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.modifyStat(Stats.DAMAGE, 1);
            assert(champ.stats[Stats.DAMAGE] === 2);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.addStat(Stats.DAMAGE, 1);
            assert(champ.stats[Stats.DAMAGE] === 2);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.removeStat(Stats.DAMAGE, 1);
            assert(champ.stats[Stats.DAMAGE] === 0);
        });
    });

    describe('Gear', () => {
        it('should exist', () => {
            const champ = new Champion();
            assert(champ.gear !== null);
            assert(champ.gear !== undefined);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setGear([]);
            assert(champ.gear === []);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setGear([]);
            champ.addGear({id: 'a'});
            assert(champ.gear.length === 1);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setGear([]);
            champ.addGear({id: 'a'});
            champ.removeGear('a');
            assert(champ.gear.length === 0);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            const champ = new Champion();
            assert(champ.skills === null);
            assert(champ.skills === undefined);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            assert(champ.skills === []);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            champ.addSkill({id: 'a'});
            assert(champ.skills.length === 1);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            champ.addSkill({id: 'a'});
            champ.removeSkill('a');
            assert(champ.skills.length === 0);
        });
    });
});

describe('Gear', () => {
    it('should exist', () => {
        assert(Gear !== null);
        assert(Gear !== undefined);
    });

    it('should be instantiateable', () => {
        assert(new Gear() !== null);
    });

    it('should have name', () => {
        const gear = new Gear();
        assert(gear.name !== null);
        assert(gear.name !== undefined);
    });

    it('should have rarity', () => {
        const gear = new Gear();
        assert(gear.rarity !== null);
        assert(gear.rarity !== undefined);
    });

    it('should have type', () => {
        const gear = new Gear();
        assert(gear.type !== null);
        assert(gear.type !== undefined);
    });

    it('should have level', () => {
        const champ = new Champion();
        assert(champ.level !== null);
        assert(champ.level !== undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            const gear = new Gear();
            assert(gear.stats !== null);
            assert(gear.stats !== undefined);
        });

        it('should be gettable', () => {
            const gear = new Gear();
            assert(gear.stats[Stats.DAMAGE] !== null);
            assert(gear.stats[Stats.DAMAGE] !== undefined);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            assert(gear.stats[Stats.DAMAGE] === 1);
        });

        it('should be modifiable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.modifyStat(Stats.DAMAGE, 1);
            assert(gear.stats[Stats.DAMAGE] === 2);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.addStat(Stats.DAMAGE, 1);
            assert(gear.stats[Stats.DAMAGE] === 2);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.removeStat(Stats.DAMAGE, 1);
            assert(gear.stats[Stats.DAMAGE] === 0);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            const gear = new Gear();
            assert(gear.skills !== null);
            assert(gear.skills !== undefined);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            assert(gear.skills === []);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            gear.addSkill({id: 'a'});
            assert(gear.skills.length === 1);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            gear.addSkill({id: 'a'});
            gear.removeSkill('a');
            assert(gear.skills.length === 0);
        });
    });

    describe('Status Effects', () => {
        it('should exist', () => {
            const gear = new Gear();
            assert(gear.effects !== null);
            assert(gear.effects !== undefined);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            assert(gear.effects === []);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            gear.addEffect({id: 'a'});
            assert(gear.effects.length === 1);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            gear.addEffect({id: 'a'});
            gear.removeEffect('a');
            assert(gear.effects.length === 0);
        });
    });
});

describe('Classes', () => {
    it('should exist', () => {
        assert(Classes !== null);
        assert(Classes !== undefined);
    });

    it('should have name', () => {
        assert(Classes.WARRIOR.name !== null);
        assert(Classes.WARRIOR.name !== undefined);
    });

    it('should have titles', () => {
        assert(Classes.WARRIOR.titles !== null);
        assert(Classes.WARRIOR.titles !== undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            assert(Classes.WARRIOR.stats !== null);
            assert(Classes.WARRIOR.stats !== undefined);
        });

        it('should be gettable', () => {
            assert(Classes.WARRIOR.stats[Stats.DAMAGE] !== null);
            assert(Classes.WARRIOR.stats[Stats.DAMAGE] !== undefined);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            assert(Classes.WARRIOR.skills !== null);
            assert(Classes.WARRIOR.skills !== undefined);
        });
    });

    describe('Custom Effects', () => {
        it('should exist', () => {
            assert(Classes.WARRIOR.effects !== null);
            assert(Classes.WARRIOR.effects !== undefined);
        });
    });
});

describe('Skills', () => {
    it('should exist', () => {
        assert(Skills !== null);
        assert(Skills !== undefined);
    });

    it('should have name', () => {
        assert(Skills['warrior'][0].name !== null);
        assert(Skills['warrior'][0].name !== undefined);
    });

    it('should have rarity', () => {
        assert(Skills['warrior'][0].rarity !== null);
        assert(Skills['warrior'][0].rarity !== undefined);
    });

    it('should have description', () => {
        assert(Skills['warrior'][0].description !== null);
        assert(Skills['warrior'][0].description !== undefined);
    });

    it('should have effects', () => {
        assert(Skills['warrior'][0].effects !== null);
        assert(Skills['warrior'][0].effects !== undefined);
    });
});