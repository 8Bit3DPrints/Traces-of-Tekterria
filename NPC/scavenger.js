class Scavenger {
    constructor() {
      this.name = 'Scavenger';
      this.inventory = ['water bottle', 'energy bar', 'first aid kit'];
    }
  
    interact(player) {
      console.log(`${this.name}: *rummages through trash* Ah, ye look like someone who could use some supplies.`);
    }
  
    tradeItem(item) {
      if (this.inventory.includes(item)) {
        console.log(`${this.name}: *trades item* Ah, ye want ${item}? That'll be 10 bottle caps.`);
      } else {
        console.log(`${this.name}: Sorry, I don't have that item.`);
      }
    }
  }