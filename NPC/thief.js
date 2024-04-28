class Thief {
    constructor() {
      this.name = 'Thief';
      this.stolenItems = [];
    }
  
    interact(player) {
      console.log(`${this.name}: *looks around nervously* Uh, just passing through...`);
    }
  
    stealItem(item) {
      if (player.inventory.includes(item)) {
        console.log(`${this.name}: *swipes item* Ah, ye won't be needing that anymore...`);
        this.stolenItems.push(item);
      } else {
        console.log(`${this.name}: Sorry, ye don't have that item.`);
      }
    }
  }