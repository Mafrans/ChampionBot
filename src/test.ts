const Assert = require('assert');
import {Champions, Champion, Stats} from './champions.ts';
import {Gear} from './gear.ts';
import {Classes, Skills} from './classes.ts';

describe('Champions', () => {
    it('should exist', () => {
        Assert.not.equal(Champions, null);
        Assert.not.equal(Champions, undefined);
    });

    it('should be instantiateable', () => {
        Assert.not.equal(new Champion(), null);
    });

    it('should have name', () => {
        const champ = new Champion();
        Assert.not.equal(champ.name, null);
        Assert.not.equal(champ.name, undefined);
    });

    it('should have surname', () => {
        const champ = new Champion();
        Assert.not.equal(champ.surname, null);
        Assert.not.equal(champ.surname, undefined);
    });

    it('should have class', () => {
        const champ = new Champion();
        Assert.not.equal(champ.class, null);
        Assert.not.equal(champ.class, undefined);
    });

    it('should have race', () => {
        const champ = new Champion();
        Assert.not.equal(champ.race, null);
        Assert.not.equal(champ.race, undefined);
    });

    it('should have level', () => {
        const champ = new Champion();
        Assert.not.equal(champ.level, null);
        Assert.not.equal(champ.level, undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            const champ = new Champion();
            Assert.not.equal(champ.stats, null);
            Assert.not.equal(champ.stats, undefined);
        });

        it('should be gettable', () => {
            const champ = new Champion();
            Assert.equal(champ.stats[Stats.DAMAGE], 0);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            Assert.equal(champ.stats[Stats.DAMAGE], 1);
        });

        it('should be modifiable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.modifyStat(Stats.DAMAGE, 1);
            Assert.equal(champ.stats[Stats.DAMAGE], 2);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.addStat(Stats.DAMAGE, 1);
            Assert.equal(champ.stats[Stats.DAMAGE], 2);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setStat(Stats.DAMAGE, 1);
            champ.removeStat(Stats.DAMAGE, 1);
            Assert.equal(champ.stats[Stats.DAMAGE], 0);
        });
    });

    describe('Gear', () => {
        it('should exist', () => {
            Assert.equal(Champions.gear, null);
            Assert.equal(Champions.gear, undefined);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setGear([]);
            Assert.equal(champ.gear, []);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setGear([]);
            champ.addGear({id: 'a'});
            Assert.equal(champ.gear.length, 1);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setGear([]);
            champ.addGear({id: 'a'});
            champ.removeGear('a');
            Assert.equal(champ.gear.length, 0);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            Assert.equal(Champions.skills, null);
            Assert.equal(Champions.skills, undefined);
        });

        it('should be settable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            Assert.equal(champ.skills, []);
        });

        it('should be addable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            champ.addSkill({id: 'a'});
            Assert.equal(champ.skills.length, 1);
        });

        it('should be removable', () => {
            const champ = new Champion();
            champ.setSkills([]);
            champ.addSkill({id: 'a'});
            champ.removeSkill('a');
            Assert.equal(champ.skills.length, 0);
        });
    });
});

describe('Gear', () => {
    it('should exist', () => {
        Assert.not.equal(Gear, null);
        Assert.not.equal(Gear, undefined);
    });

    it('should be instantiateable', () => {
        Assert.not.equal(new Gear(), null);
    });

    it('should have name', () => {
        const gear = new Gear();
        Assert.not.equal(gear.name, null);
        Assert.not.equal(gear.name, undefined);
    });

    it('should have rarity', () => {
        const gear = new Gear();
        Assert.not.equal(gear.rarity, null);
        Assert.not.equal(gear.rarity, undefined);
    });

    it('should have type', () => {
        const gear = new Gear();
        Assert.not.equal(gear.type, null);
        Assert.not.equal(gear.type, undefined);
    });

    it('should have level', () => {
        const champ = new Champion();
        Assert.not.equal(champ.level, null);
        Assert.not.equal(champ.level, undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            const gear = new Gear();
            Assert.not.equal(gear.stats, null);
            Assert.not.equal(gear.stats, undefined);
        });

        it('should be gettable', () => {
            const gear = new Gear();
            Assert.equal(gear.stats[Stats.DAMAGE], 0);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            Assert.equal(gear.stats[Stats.DAMAGE], 1);
        });

        it('should be modifiable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.modifyStat(Stats.DAMAGE, 1);
            Assert.equal(gear.stats[Stats.DAMAGE], 2);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.addStat(Stats.DAMAGE, 1);
            Assert.equal(gear.stats[Stats.DAMAGE], 2);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setStat(Stats.DAMAGE, 1);
            gear.removeStat(Stats.DAMAGE, 1);
            Assert.equal(gear.stats[Stats.DAMAGE], 0);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            const gear = new Gear();
            Assert.equal(gear.skills, null);
            Assert.equal(gear.skills, undefined);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            Assert.equal(gear.skills, []);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            gear.addSkill({id: 'a'});
            Assert.equal(gear.skills.length, 1);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setSkills([]);
            gear.addSkill({id: 'a'});
            gear.removeSkill('a');
            Assert.equal(gear.skills.length, 0);
        });
    });

    describe('Status Effects', () => {
        it('should exist', () => {
            const gear = new Gear();
            Assert.equal(gear.effects, null);
            Assert.equal(gear.effects, undefined);
        });

        it('should be settable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            Assert.equal(gear.effects, []);
        });

        it('should be addable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            gear.addEffect({id: 'a'});
            Assert.equal(gear.effects.length, 1);
        });

        it('should be removable', () => {
            const gear = new Gear();
            gear.setEffects([]);
            gear.addEffect({id: 'a'});
            gear.removeEffect('a');
            Assert.equal(gear.effects.length, 0);
        });
    });
});

describe('Classes', () => {
    it('should exist', () => {
        Assert.not.equal(Classes, null);
        Assert.not.equal(Classes, undefined);
    });

    it('should have name', () => {
        Assert.not.equal(Classes['warrior'].name, null);
        Assert.not.equal(Classes['warrior'].name, undefined);
    });

    it('should have titles', () => {
        Assert.not.equal(Classes['warrior'].titles, null);
        Assert.not.equal(Classes['warrior'].titles, undefined);
    });

    describe('Stats', () => {
        it('should exist', () => {
            Assert.not.equal(Classes['warrior'].stats, null);
            Assert.not.equal(Classes['warrior'].stats, undefined);
        });

        it('should be gettable', () => {
            Assert.not.equal(Classes['warrior'].stats[Stats.DAMAGE], null);
            Assert.not.equal(Classes['warrior'].stats[Stats.DAMAGE], undefined);
        });
    });

    describe('Skills', () => {
        it('should exist', () => {
            Assert.equal(Classes['warrior'].skills, null);
            Assert.equal(Classes['warrior'].skills, undefined);
        });
    });

    describe('Custom Effects', () => {
        it('should exist', () => {
            Assert.equal(Classes['warrior'].effects, null);
            Assert.equal(Classes['warrior'].effects, undefined);
        });
    });
});

describe('Skills', () => {
    it('should exist', () => {
        Assert.not.equal(Skills, null);
        Assert.not.equal(Skills, undefined);
    });

    it('should have name', () => {
        Assert.not.equal(Skills['warrior'][0].name, null);
        Assert.not.equal(Skills['warrior'][0].name, undefined);
    });

    it('should have rarity', () => {
        Assert.not.equal(Skills['warrior'][0].rarity, null);
        Assert.not.equal(Skills['warrior'][0].rarity, undefined);
    });

    it('should have description', () => {
        Assert.not.equal(Skills['warrior'][0].description, null);
        Assert.not.equal(Skills['warrior'][0].description, undefined);
    });

    it('should have effects', () => {
        Assert.not.equal(Skills['warrior'][0].effects, null);
        Assert.not.equal(Skills['warrior'][0].effects, undefined);
    });
});