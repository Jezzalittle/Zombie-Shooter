

var LAYER_COUNT = level.layers.length;
var MAP = { tw: level.width, th: level.height};
var TILE = level.tilewidth;
var TILESET_TILE = level.tilesets[0].tilewidth;
var TILESET_PADDING = level.tilesets[0].margin;
var TILESET_SPACING = level.tilesets[0].spacing;
var TILESET_COUNT_X = level.tilesets[0].columns;
var TILESET_COUNT_Y = level.tilesets[0].tilecount / TILESET_COUNT_X;


var gameStateMainMenu = 0;
var gameStateLevel1 = 1;
var gameStateGameWin = 3;
var gameState = gameStateMainMenu;

var Floor = 0;
var Walls = 1;



function runMenu(deltaTime)
{

	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
	{
		gameState = gameStateLevel1
	}
	
}

function runGame(deltaTime)
{
drawMap();

context.fillStyle = "#f00";
context.font="14px Arial";
context.fillText("FPS: " + fps, 5, 20, 100);
}

function runGameWin(deltaTime)
{

	if(keyboard.isKeyDown(keyboard.KEY_SHIFT) == true)
	{
		gameState = gameStateMainMenu;
	}
} 










function run()
{
context.fillStyle = "#ccc";
context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
	
	
switch(gameState)
{
	case gameStateMainMenu:
	runMenu(deltaTime);
	break;
	case gameStateLevel1:
	runGame(deltaTime);
	break;
	case gameStateGameWin:
	runGameWin(deltaTime);
	break;
	
}
}



function drawMap()
{
	for(var layerIdx=0; layerIdx<LAYER_COUNT; layerIdx++)
	{
		if(level.layers[layerIdx].visible == false) continue;
		var idx = 0;
		for( var y = 0; y < level.layers[layerIdx].height; y++ )
		{
			for( var x = 0; x < level.layers[layerIdx].width; x++ )
			{
				if( level.layers[layerIdx].data[idx] != 0 )
				{
					var tileIndex = level.layers[layerIdx].data[idx] - 1;
					var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) * (TILESET_TILE + TILESET_SPACING);
					var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_Y)) * (TILESET_TILE + TILESET_SPACING);
					context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, x*TILE, (y)*TILE, TILESET_TILE+1, TILESET_TILE+1);
					
				}
				idx++;
			}
		}
	}
}

var cells = []; 
function initialize()
{
	for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++) 
	{
		cells[layerIdx] = []; 
		var idx = 0;
		for(var y = 0; y < level.layers[layerIdx].height; y++) 
			{
			cells[layerIdx][y] = [];
			for(var x = 0; x < level.layers[layerIdx].width; x++) 
				{
				if(level.layers[layerIdx].data[idx] != 0) 
					{

					cells[layerIdx][y][x] = 1;
					}

					
				else if(cells[layerIdx][y][x] != 1)
					{
					cells[layerIdx][y][x] = 0;
					}
					idx++;
				}
			}
	}

}
initialize();