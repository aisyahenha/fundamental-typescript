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

  getHit(demage: number) {
    this.hp -= demage;
  }
  receiveDemage(demage: number) {
    this.hp -= demage;
  }
  attack(hero: Hero) {
    hero.receiveDemage(this.baseDemage);
  }
}
