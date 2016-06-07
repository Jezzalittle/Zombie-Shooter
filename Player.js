
var knifeAnim

var Player = function()
{
this.sprite = new Sprite("survivor-idle_knife_0.png");
this.sprite.buildAnimation(1, 1, 289, 224, 0.05,
[0]);


this.position = new Vector2();
this.position.set( 1*TILE, 19*TILE );
this.width = 159;
this.height = 163;

this.offset = new Vector2();
this.offset.set(0,-TILE/2)

this.velocity = new Vector2();

this.isdead = false


}

Player.prototype.update = function(deltaTime)
{
this.sprite.update(deltaTime);

 if(keyboard.isKeyDown(keyboard.KEY_UP) == true) 
 {
	 this.position.y -= 1;
 }

 if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true) 
 {
	 this.position.y += 1;
 }

  if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) 
 {
	 this.position.x += 1;
 }

  if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) 
 {
	 this.position.x -= 1;
 }
}


Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}