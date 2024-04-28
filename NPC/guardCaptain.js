class GuardCaptain {
    constructor() {
      this.name = 'Guard Captain';
      this.guardCount = 5;
    }
  
    interact(player) {
      console.log(`${this.name}: Halt! Who goes there?`);
    }
  
    commandGuards() {
      console.log(`${this.name}: *commands guards* Search the area!`);
    }
  }