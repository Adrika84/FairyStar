class Fairy extends BaseClass {
    constructor(x, y) {
      super(x, y, 300, 300);
      this.image = loadImage("fairy1.png");
    }
    display() {
      // this.body.position.x;
      // this.body.position.y;
      super.display();
    }
  }