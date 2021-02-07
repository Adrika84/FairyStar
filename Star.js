class Star {
    constructor(x, y, width, height) {
      // super(x, y, 50, 50);

      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("star.png");
    }

    display() {
      //this.body.position.x;
      //this.body.position.y;
      //super.display();
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

    }
  }