"use strict";
class Hero {
    constructor(name, hp, mana, demage) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.baseDemage = demage;
    }
    getHit(demage) {
        this.hp -= demage;
    }
    receiveDemage(demage) {
        this.hp -= demage;
    }
    attack(hero) {
        hero.receiveDemage(this.baseDemage);
    }
}
