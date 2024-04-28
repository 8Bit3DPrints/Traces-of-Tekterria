class Innkeeper {
    constructor() {
      this.name = 'Innkeeper';
      this.rooms = ['single room', 'double room', 'suite'];
      this.prices = [10, 20, 30];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome to the inn! What kind of room would ye like?`);
    }
  
    rentRoom(room) {
      if (this.rooms.includes(room)) {
        console.log(`${this.name}: Ah, ye want a ${room}? That'll be ${this.prices[this.rooms.indexOf(room)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, we don't have that kind of room.`);
      }
    }
  }