const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    gameState="onSling";
//Stritng data type 
var str ="arijeetdiwan";
console.log(str);

//number data type
var num=20;
console.log(num);

//boolean data type 
var bool=true;
console.log(bool);

//undefined 
var obj;
console.log(obj);

//null
var object=null;
console.log(object);

// array data type, holding same data type 
var aar1=[1,2,3,4];
console.log(aar1);


// array data type, holding different data type 
var aar2=["name",12,false];
console.log(aar2);

//array data type, holding multiple arrays
var aar3=[[1,2],[3,4],[5,6],[7,9]];
console.log(aar3);

//get the length of aar3
console.log(aar3.length);

//get the first element of the arr3
console.log(aar3[0]);


//get the second element of the arr3
console.log(aar3[1]);


//get the first element of the first element of aar3
console.log(aar3[0][0]);

//get the second  element of the first element of aar3
console.log(aar3[0][1]);


//add element to the array
aar3.push("xyz");
aar3.push("ght");
console.log(aar3);

//remove element from the array 
aar3.pop();

console.log(aar3);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){

        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   

}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
  //      slingshot.attach(bird.body);
    }
}