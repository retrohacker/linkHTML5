function playerWalkUp()
{
	player[0] = 7;
	player[4] = 0;
}

function playerWalkDown()
{
	player[0] = 1;
	player[4] = 2;
}

function playerWalkLeft()
{
	player[0] = 3;
	player[4] = 3;
}

function playerWalkRight()
{
	player[0] = 5;
	player[4] = 1;
}

function playerStop()
{
	switch (player[4])
	{
	case 0:
		player[0] = 6;
		break;
	case 1:
		player[0] = 4;
		break;
	case 2:
		player[0] = 0;
		break;
	case 3:
		player[0] = 2;
		break;
	}
}