var framesRendered = 0;

function drawFrame() {
	changeGameState();
	context.clearRect(0, 0, gameWindow.width, gameWindow.height);
	renderTerrain();
	renderPlayer();
	framesRendered++;
	
	document.getElementById("position").innerHTML = "Frames Rendered = " + framesRendered;
}