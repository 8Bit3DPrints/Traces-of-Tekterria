class Engineer {
    constructor() {
      this.name = 'Engineer';
      this.skills = ['mechanical repair', 'electrical engineering', 'robotics'];
    }
  
    interact(player) {
      console.log(`${this.name}: *tinkers with machine* Ah, ye look like someone who could use a good repair.`);
    }
  
    repairMachine() {
      console.log(`${this.name}: *repairs machine* There ye go! That should be fixed now.`);
    }
  
    upgradeMachine() {
      console.log(`${this.name}: *upgrades machine* Ah, ye want an upgrade? That'll cost ye 50 bottle caps.`);
    }
  }