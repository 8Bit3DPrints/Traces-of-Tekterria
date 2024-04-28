class Blacksmith {
    constructor() {
      this.name = 'Blacksmith';
      this.items = ['sword', 'shield', 'armor'];
      this.prices = [50, 20, 30];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome to my forge! What can I craft for ye?`);
    }
  
    craftItem(item) {
      if (this.items.includes(item)) {
        console.log(`${this.name}: Ah, ye want a ${item}? That'll be ${this.prices[this.items.indexOf(item)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, I don't have the materials for that.`);
      }
    }
  }