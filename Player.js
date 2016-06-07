
var knifeAnim

var Player = function()
{
this.sprite = new Sprite("ChuckNorris.png");
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[0, 1, 2, 3, 4, 5, 6, 7]);
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[8, 9, 10, 11, 12]);
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[52, 53, 54, 55, 56, 57, 58, 59]);
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[60, 61, 62, 63, 64]);
this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
[65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]);
for(var i=0; i<ANIM_MAX; i++)
{
this.sprite.setAnimationOffset(i, -55, -87);
}

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