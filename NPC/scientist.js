class Scientist {
    constructor() {
      this.name = 'Scientist';
      this.skills = ['biology', 'chemistry', 'physics'];
    }
  
    interact(player) {
      console.log(`${this.name}: *examines player* Ah, ye look like someone who could use some scientific analysis.`);
    }
  
    analyzePlayer() {
      console.log(`${this.name}: *analyzes player* Ah, ye have a rare genetic mutation that could be useful in our research.`);
    }
  }