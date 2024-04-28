class Healer {
    constructor() {
      this.name = 'Healer';
      this.potions = ['health potion', 'mana potion'];
      this.prices = [10, 20];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome, traveler! What ails ye?`);
    }
  
    heal(player) {
      console.log(`${this.name}: *heals player* Ye should be feeling better now.`);
    }
  
    sellPotion(potion) {
      if (this.potions.includes(potion)) {
        console.log(`${this.name}: Ah, ye want a ${potion}? That'll be ${this.prices[this.potions.indexOf(potion)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, I don't have that potion.`);
      }
    }
  }