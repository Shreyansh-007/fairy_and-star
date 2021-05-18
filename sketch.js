var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyAnimation
var joyMusic

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyAnimation = loadAnimation("fairyImage1.png","fairyImage2.png")
	joyMusic = loadSound("joyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	joyMusic.play()

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,500)
	fairy.addAnimation("fairy",fairyAnimation)
	fairy.scale = 0.25


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  keyPressed()

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyDown("right")){
		fairy.x +=50
	}

	if (keyDown("left")){
		fairy.x -=50
	}
	
}
