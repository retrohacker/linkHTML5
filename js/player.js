function renderPlayer() 
{
	var a = player[0];
	var xpos = gameWindow.width / 2 - 13;
	var ypos = gameWindow.height / 2 - 13;
	var currentFrame = player[3];
	var currentDirection = player[4];
	var spriteSheet = spriteSheets[animations[a][0]];
	var totalFrames = animations[a][1];
	var topX = animations[a][2];
	var topYframe = animations[a][3];
	var frameHeight = animations[a][4];
	var frameWidth = animations[a][5];
	var topXframe = (((currentFrame % totalFrames)) * frameWidth) + topX;
	context.drawImage(spriteSheet, topXframe, topYframe, frameWidth, frameHeight, xpos, ypos, frameWidth, frameHeight);
	currentFrame++;
	player[3] = currentFrame;
}