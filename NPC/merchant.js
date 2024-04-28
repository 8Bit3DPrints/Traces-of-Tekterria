class Merchant {
    constructor() {
      this.name = 'Merchant';
      this.inventory = ['apple', 'sword', 'shield'];
      this.prices = [10, 50, 100];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome! What can I sell you today?`);
    }
  
    sellItem(item) {
      if (this.inventory.includes(item)) {
        console.log(`${this.name}: Ah, you want ${item}? That'll be ${this.prices[this.inventory.indexOf(item)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, I don't have that in stock.`);
      }
    }
  }