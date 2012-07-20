var gameWindow;
var context;
var spriteSheets;
var numberOfSheets;
var sheetsLoaded = 0;
var animations;
var map;
var terrain;
var player;
var gameLoop;
var mapX = 50;
var mapY = 50;
var mapXUpperBounds = (mapX - 1) * 26; //size of map on x axis
var mapYUpperBounds = (mapY - 1) * 26; //size of map on y axis
var keyPressed = 0;

function startGame() {
    gameWindow = document.getElementById('gameCanvas');
    context = gameWindow.getContext("2d");
    
    /******************************
     * Declare Sprite Sheets here *
     *****************************/
    numberOfSheets = 2;
    spriteSheets = new Array(numberOfSheets);
    spriteSheets[0] = new Image();
	spriteSheets[0].src = "sprites/ZeldaWalking.png";
    spriteSheets[1] = new Image();
	spriteSheets[1].src = "sprites/terrain.png";
    
	loadImages();
    
    /**************
     * Animations *
     * ***********/
     
    // Declare all animations for characters and objects that are sub-sets of sprite sheets here
    var numberOfAnimations = 8;
    animations = new Array(numberOfAnimations);
    // Each array will be in the following format: 
    // [spritesheet index][numberOfFrames][topX][topY][height][width]
    // Where topx and topy indicate the upper right corner of the first sprite
    animations[0] = new Array(0, 1, 0, 0, 26, 26); //Zelda Standing Forward
    animations[1] = new Array(0, 10, 52, 0, 26, 26); //Zelda Walking Forward
    animations[2] = new Array(0, 1, 0, 26, 26, 26); //Zelda Standing Left
    animations[3] = new Array(0, 10, 52, 26, 26, 26); //Zelda Walking Left
    animations[4] = new Array(0, 1, 0, 52, 26, 26); //Zelda Standing Right
    animations[5] = new Array(0, 10, 52, 52, 26, 26); //Zelda Walking Right
    animations[6] = new Array(0, 1, 0, 78, 26, 26); //Zelda Standing Backward
    animations[7] = new Array(0, 9, 26, 78, 26, 26); //Zelda Walking Backward
    
    /***********
     * Terrain *
     * ********/
    //Each terrain tile will be 26x26 and rendered from the terrain
    //sprite sheet spriteSheet[1]. The array will be as follows:
    //[rows][cols]
    terrain = new Array(25, 25);
    
    
    /*******
     * Map *
     * ****/
    
    //The map will use the terrain sprites it will be a two dimensional array where the first
    //index is the x coordinate and the second index is the y coordinate
    map = new Array(mapX);
    for (var i = 0; i < mapX;i++)
    {
		map[i] = new Array(mapY);
		for (var j = 0;j < mapY;j++)
		{
			map[i][j] = Math.floor(Math.random() * 600);
		}
    }
    
    // Player array:
    // [currentAnimation][xpos][ypos][frame][direction]
    // direction: 0=up 1=right 2=down 3=left
    player = new Array(0, 50, 50, 0, 2);
    
    gameLoop = setInterval("drawFrame()", 50);
}

function loadImages()
{
	sheetsLoaded++;
	if (sheetsLoaded < numberOfSheets)
	{
		spriteSheets[sheetsLoaded].onload = loadImages;
	}
}