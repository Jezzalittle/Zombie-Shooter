
var knifeAnim

var Player = function()
{
this.sprite = new Sprite("survivor-idle_knife_0.png");
this.sprite.buildAnimation(1, 1, 289, 224, 0.05,
[0]);
this.sprite.setAnimationOffset(0, -50,-70 );

this.position = new Vector2();
this.position.set( 3*TILE, 3*TILE );
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


if((keyboard.isKeyDown(keyboard.KEY_UP) == true) || (keyboard.isKeyDown(keyboard.KEY_W) == true)) 
 {
	 this.position.y -= 5;
	 
	var tx = pixelToTile(this.position.x + this.offset.x);
	var ty = pixelToTile(this.position.y + this.offset.y);
	 
	 if(cellAtTileCoord(Walls, tx, ty) == true)
	 {
		 this.position.y = ty * TILE + TILE - this.offset.y;
	 }
 }

 if((keyboard.isKeyDown(keyboard.KEY_DOWN) == true) || (keyboard.isKeyDown(keyboard.KEY_S) == true))
 {
	 this.position.y += 5;
	 
	 var tx = pixelToTile(this.position.x + this.offset.x);
	 var ty = pixelToTile(this.position.y + this.offset.y);
	 
	 if(cellAtTileCoord(Walls, tx, ty) == true)
	 {
		 this.position.y = ty * TILE - 1 - this.offset.y;
	 }
 }

  if((keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) || (keyboard.isKeyDown(keyboard.KEY_D) == true))
 {
	 this.position.x += 5;
	 
	 var tx = pixelToTile(this.position.x + this.offset.x);
	 var ty = pixelToTile(this.position.y + this.offset.y);
	 
	 if(cellAtTileCoord(Walls, tx, ty) == true)
	 {
		 this.position.x = tx * TILE - 1 - this.offset.x;
	 }
 }

  if((keyboard.isKeyDown(keyboard.KEY_LEFT) == true) || (keyboard.isKeyDown(keyboard.KEY_A) == true))
 {
	 this.position.x -= 5;
	 
	 var tx = pixelToTile(this.position.x + this.offset.x);
	 var ty = pixelToTile(this.position.y + this.offset.y);
	 
	 if(cellAtTileCoord(Walls, tx, ty) == true)
	 {
		 this.position.x = tx * TILE + TILE - this.offset.x;
	 }
 }
}


Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y, 0.375);
}