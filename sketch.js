var ball
function setup() {
  createCanvas(500,500);
 ball = createSprite (160,150,20,10)
 
}

function draw() 
{
  background("blue");
  if (keyDown(RIGHT_ARROW))
  {
  ball.x=ball.x+5
  }
if (keyDown(LEFT_ARROW))
{
  ball.x=ball.x-5
}
  if(keyDown(UP_ARROW))
  {
    ball.y=ball.y-5
  }
  if (keyDown(DOWN_ARROW))
{
  ball.y=ball.y+5
}
  drawSprites ()
}




