function getTerrain(spriteIndex, xpos, ypos)
{
	//draw the sprite to the gameWindow at xpos ypos
	var totalSprites = terrain[0] * terrain[1];
	if (spriteIndex <= totalSprites)
	{
		var col = Math.floor(spriteIndex / terrain[0]);
		var row = (spriteIndex % terrain[0]);
		
		var topx = col * 26;
		var topy = row * 26;
		context.drawImage(spriteSheets[1], topx, topy, 26, 26, (xpos * 26) - (player[1] - gameWindow.width / 2 + 13), (ypos * 26) - (player[2] - gameWindow.height / 2 + 13), 26, 26);
	}
}

function renderTerrain()
{
	for (var i = 0; i < mapX;i++)
    {
		for (var j = 0;j < mapY;j++)
		{
			getTerrain(map[i][j], i, j);
		}
    }
}