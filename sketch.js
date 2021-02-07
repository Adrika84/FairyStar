const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg, fairyImage;
var fairy;

function preload(){
    backgroundImg = loadImage("starnight.png");
    fairyImage = loadImage("fairy1.png");
}

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);

    fairy = createSprite(100, 200, 300, 300);
    fairy.addImage(fairyImage);
    fairy.scale = 0.2;
    //fairy.x = fairy.body.position.x;
    //fairy.y = fairy.body.position.y;

    star = new Star(400, 100, 50, 50);
    //star.x = star.body.position.x;
    //star.y = star.body.position.y;

  }

    function draw() {
      background(backgroundImg);
      Engine.update(engine);
      console.log ("Star current posiion " + star.body.position.x + ", " + star.body.position.y);

      if ((star.body.position.x - fairy.x < 150)  && (fairy.y - star.body.position.y < 10)){
        Matter.Body.setStatic(star.body, true);
      }

      star.display();
      drawSprites();
    }

    function keyPressed() {
       console.log ("Fairy current posiion " + fairy.x + ", " + fairy.y);
       console.log ("Star current posiion " + star.body.position.x + ", " + star.body.position.y);

      if (keyCode === RIGHT_ARROW) {
      //  alert("right arrow pressed")
        // fairy.x += 5;
        if (fairy.x < 1100) {
          fairy.x += 20;
          // console.log ("new right posiion " + fairy.body.position.x);
        }      
      } else if (keyCode === LEFT_ARROW) {
        if (fairy.x > 100) {
          fairy.x -= 20;
          // console.log ("new left posiion " + fairy.body.position.x);
        }
      } else if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(star.body, false);
      }
    }

// function setup(){
//     var canvas = createCanvas(1200, 400);
//     engine = Engine.create();
//     world = engine.world;

//     ground = new Ground(600, height, 1200, 20);

//     fairy = new Fairy(100, 300);
//     //fairy.x = fairy.body.position.x;
//     //fairy.y = fairy.body.position.y;

//     star = new Star(100, 100, 50, 50);
//     //star.x = star.body.position.x;
//     //star.y = star.body.position.y;

//   }
  
//   function draw() {
//       background(backgroundImg);
//       Engine.update(engine);

//       fairy.display();
//       star.display();
//     }

//     function keyPressed() {
//        console.log ("Fairy current posiion " + fairy.body.position.x + ", " + fairy.body.position.y);
//        console.log ("Star current posiion " + star.body.position.x + ", " + star.body.position.y);

//       if (keyCode === RIGHT_ARROW) {
//       //  alert("right arrow pressed")
//         // fairy.x += 5;
//         if (fairy.body.position.x < 1100) {
//           fairy.body.position.x += 5;
//           // console.log ("new right posiion " + fairy.body.position.x);
//         }      
//       } else if (keyCode === LEFT_ARROW) {
//         if (fairy.body.position.x > 100) {
//           fairy.body.position.x -= 5;
//           // console.log ("new left posiion " + fairy.body.position.x);
//         }
//       }
//     }
    