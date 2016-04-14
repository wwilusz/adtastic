function addCanvas () {
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	var width = 125;  // Triangle Width
	var height = 105; // Triangle Height
	var padding = 20;

	// Draw a path
	context.beginPath();
	context.moveTo(padding + width/2, padding);        // Top Corner
	context.lineTo(padding + width, height + padding); // Bottom Right
	context.lineTo(padding, height + padding);         // Bottom Left
	context.closePath();

	// Fill the path
	context.fillStyle = "#ffc821";
	context.fill();
	console.log(canvas.toDataURL());

	var currentDiv = document.getElementById("div1");
	document.body.insertBefore(canvas, currentDiv);
}

window.onload = addCanvas;
