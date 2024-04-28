class Scholar {
    constructor() {
      this.name = 'Scholar';
      this.knowledge = ['history', 'magic', 'science'];
    }
  
    interact(player) {
      console.log(`${this.name}: Ah, a seeker of knowledge! What would ye like to learn?`);
    }
  
    teachKnowledge(knowledge) {
      if (this.knowledge.includes(knowledge)) {
        console.log(`${this.name}: Ah, ye want to learn about ${knowledge}? Very well, I shall teach ye.`);
      } else {
        console.log(`${this.name}: Sorry, I don't know much about that subject.`);
      }
    }
  }