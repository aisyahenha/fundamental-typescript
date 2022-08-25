"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(name, hp, mana, demage) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.baseDemage = demage;
    }
    getMana() {
        return this.mana;
    }
    getName() {
        return this.name;
    }
    getBaseDemage() {
        return this.baseDemage;
    }
    getHp() {
        return this.hp;
    }
    heal(hero) {
        hero.hp += this.mana / 2;
        this.mana -= this.mana / 2;
    }
    receiveDemage(demage) {
        this.hp -= demage;
    }
    attack(hero) {
        hero.receiveDemage(this.baseDemage);
    }
}
exports.default = Hero;
