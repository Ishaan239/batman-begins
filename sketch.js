const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var drops = [];
var engine, world;
var t1, t2, t3, t4;
var umbrella;
var rand;
var thunderFrame, thunder;

function preload() {
   t1 = loadImage("images/thunderbolt/1.png");
   t2 = loadImage("images/thunderbolt/2.png");
   t3 = loadImage("images/thunderbolt/3.png");
   t4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
   createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

   umbrella = new Umbrella(600, 475); 
    if(frameCount%150 === 0) {
        for(var i = 0;i<100;i++) {
            drops.push(new Drops(random(0, 1200), random(0, 400)));
        }
    }
}

function draw() {
    background(0);
    Engine.update(engine);
    umbrella.display();

    for(var i = 0;i<100;i++) {
        drops[i].display();
        drops[i].updateDrops();
    }
    rand = Math.round(random(1, 4));

    if(frameCount%80 === 0) {
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 1190), random(10, 30));
        switch(rand) {
            case 1:
                thunder.addImage(t1);
                break;

            case 2:
                thunder.addImage(t2);
                break;

            case 3:
                thunder.addImage(t3);
                break;

            case 4:
                thunder.addImage(t4);
                break;
                
                default:break
        }
        thunder.scale = random(0.6, 0.8);
    }
    if(thunderFrame+10 === frameCount && thunder) {
        thunder.destroy();
    }
    drawSprites();
}   

