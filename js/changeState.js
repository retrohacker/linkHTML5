var xSpeed = 5;
var ySpeed = 5;
function changeGameState()
{
	if (keyPressed === 115)
	{
		playerWalkDown();
		if(player[2]<=(mapXUpperBounds - ySpeed))
		{
			player[2]+=ySpeed;
		}
	}
	else if (keyPressed === 97)
	{
		playerWalkLeft();
		if(player[1]>=(0 + xSpeed))
		{
			player[1]-=xSpeed;
		}
	}
	else if (keyPressed === 100)
	{
		playerWalkRight();
		if(player[1]<=(mapYUpperBounds - xSpeed))
		{
			player[1]+=xSpeed;
		}
	}
	else if (keyPressed === 119)
	{
		playerWalkUp();
		if(player[2]>=(0 + ySpeed))
		{
			player[2]-=ySpeed;
		}
	}
	else
	{
		playerStop();
	}	
}