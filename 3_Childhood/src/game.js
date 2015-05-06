$(function() {

	// Canvas
	var canvas = $("#game")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#game").width();
	var h = $("#game").height();

	// Vars
	var cellWidth = 10;
	var direction;
	var food;
	var score;
	var snake;
	var paused;
	var gameLoop;

	function start()
	{
		// Start
		direction = 'right';
		paused = false;
		createSnake();
		score = 0;

		// Game loop (each frame is every 60ms)
		//if (typeof gameLoop != undefined) clearInterval(gameLoop);
		gameLoop = setInterval(drawFrame, 60);
	}
	start();

	function createSnake()
	{
		var length = 5;
		snake = [];

		for (var i = length - 1; i >= 0; i--)
		{
			snake.push({x: i, y: 0});
		}
	}

	function drawFrame()
	{
		// Background color (Using css instead)
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, w, h);

		// Instructions
		ctx.fillStyle = 'blue';
		ctx.fillText('Arrow keys to move.', 5, 10);
		ctx.fillText('Spacebar to pause.', 5, 20);

		// Snake
		for (var i = 0; i < snake.length; i++)
		{
			var cell = snake[i];
			drawCell(cell.x, cell.y);
		};

		// Snake Movement
		var newX = snake[0].x;
		var newY = snake[0].y;

		if (direction == 'right') newX++;
		else if (direction == 'left') newX--;
		else if (direction == 'up') newY--;
		else if (direction == 'down') newY++;

		if (newX == -1 || newX == w/cellWidth || newY == -1 || newY == h/cellWidth)
		{
			return;
		}

		var tail = snake.pop();
		tail.x = newX;
		tail.y = newY;

		snake.unshift(tail);
	}

	function drawCell(x, y)
	{
		// Fill
		ctx.fillStyle = 'blue';
		ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
	}

	function togglePause()
	{
		if (paused)
		{
			paused = false;
			gameLoop = setInterval(drawFrame, 60);
		}
		else
		{
			paused = true;
			clearInterval(gameLoop);
			ctx.fillText('Paused', 5, h-5);
		}
	}

	// Controls
	$(document).keydown(function(e)
	{
		var key = e.which;

		if (key == 37) direction = 'left';
		else if (key == 38) direction = 'up';
		else if (key == 39) direction = 'right';
		else if (key == 40) direction = 'down';

		if (key == 32) togglePause();
	});
	
});