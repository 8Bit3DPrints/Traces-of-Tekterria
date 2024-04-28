class Survivor {
    constructor() {
      this.name = 'Survivor';
      this.skills = ['first aid', 'hacking', 'melee combat'];
    }
  
    interact(player) {
      console.log(`${this.name}: *looks around nervously* Ah, ye look like someone who could help me survive.`);
    }
  
    askForHelp() {
      console.log(`${this.name}: *asks for help* Please, ye have to help me! I've got a group of mutants on my tail!`);
    }
  }