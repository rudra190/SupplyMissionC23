var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var wall , wall2 , wall3 ;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	var packageSprite_options={
		isStatic:true
	 }

	 var wall_options={
		isStatic:true
	 }

	 var wall2_options={
		isStatic:true
	 }

	 var wall3_options={
		isStatic:true
	 }
	 
	 
	 


	

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageSprite_options);
	World.add(world, packageBody);
	
 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 wall=createSprite(390,650,200,20 ,{isStatic:true}, wall_options);

	wall2=createSprite(500,610,20,100, {isStatic:true}, wall2_options);
 
	wall3=createSprite(300,600,20,100 ,{isStatic:true}, wall3_options);


	Engine.run(engine);
  
}

Matter.packageBody.setStatic(packageBody, isStatic=true)



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
if (keyCode === DOWN_ARROW)
 {
	  Matter.Body.setStatic(packageBody, false); }
  }




