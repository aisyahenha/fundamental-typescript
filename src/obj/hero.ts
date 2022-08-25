class Hero {
  private name: string;
  private hp: number;
  private mana: number;
  private baseDemage: number;

  /**
   *
   */
  constructor(name: string, hp: number, mana: number, demage: number) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.baseDemage = demage;
    // super();
  }
  getMana(): number {
    return this.mana;
  }
  getName(): string {
    return this.name;
  }
  getBaseDemage(): number {
    return this.baseDemage;
  }
  getHp(): number {
    return this.hp;
  }

  heal(hero: Hero) {
    hero.hp += this.mana / 2;
    this.mana -= this.mana / 2;
  }
  receiveDemage(demage: number) {
    this.hp -= demage;
  }
  attack(hero: Hero) {
    hero.receiveDemage(this.baseDemage);
  }
}


export default Hero;