class Trader {
    constructor() {
      this.name = 'Trader';
      this.goods = ['food', 'water', 'cloth'];
      this.prices = [5, 10, 15];
    }
  
    interact(player) {
      console.log(`${this.name}: Welcome to my market stall! What goods would ye like to buy?`);
    }
  
    sellGood(good) {
      if (this.goods.includes(good)) {
        console.log(`${this.name}: Ah, ye want ${good}? That'll be ${this.prices[this.goods.indexOf(good)]} gold.`);
      } else {
        console.log(`${this.name}: Sorry, I don't have that good.`);
      }
    }
  }