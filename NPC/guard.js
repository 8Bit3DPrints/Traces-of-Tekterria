class Guard {
    constructor() {
      this.name = 'Guard';
      this.alertness = 100; // 0-100, higher is more alert
    }
  
    interact(player) {
      if (this.alertness > 50) {
        console.log(`${this.name}: Halt! Who goes there?`);
      } else {
        console.log(`${this.name}: *yawn* Oh, just a traveler...`);
      }
    }
  
    patrol() {
      this.alertness += 10; // increase alertness over time
    }
  }