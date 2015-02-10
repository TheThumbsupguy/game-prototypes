///////////////////////////////////////////////
//                   Game                    //
///////////////////////////////////////////////
Crafty.scene('Game', function()
{
	// Occupied tiles
	this.occupied = new Array(Game.map_grid.width);

	for (var i = 0; i < Game.map_grid.width; i++)
	{
		this.occupied[i] = new Array(Game.map_grid.height);

		for (var y = 0; y < Game.map_grid.height; y++)
		{
			this.occupied[i][y] = false;
		}
	}

	// Player
	this.player = Crafty.e('Player').at(5, 5);
	this.occupied[this.player.at().x][this.player.at().y] = true;

	// Edges and blocks
	for (var x = 0; x < Game.map_grid.width; x++)
	{
	    for (var y = 0; y < Game.map_grid.height; y++)
	    {
	        var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
	 
	        if (at_edge)
	        {
				Crafty.e('Edge').at(x, y);
				this.occupied[x][y] = true;
	        }
	        else if (Math.random() < 0.06 && !this.occupied[x][y])
	        {
				Crafty.e('Block').at(x, y);
				this.occupied[x][y] = true;
	        }
	    }
	}

	// Generate items
	var max_items = 5;
	for (var x = 0; x < Game.map_grid.width; x++)
	{
		for (var y = 0; y < Game.map_grid.height; y++)
		{
			if (Math.random() < 0.01)
			{
				if (Crafty('Item').length < max_items && !this.occupied[x][y])
				{
					Crafty.e('Item').at(x, y);
					this.occupied[x][y] = true;
				}
			}
		}
	}

	// Show victory
	this.show_victory = this.bind('ItemCollected', function()
	{
		if ( ! Crafty('Item').length)
		{
			Crafty.scene('Victory');
		}
	});

}, function()
{
	this.unbind('ItemCollected', this.show_victory)
});

///////////////////////////////////////////////
//                  Victory                  //
///////////////////////////////////////////////
Crafty.scene('Victory', function()
{
	Crafty.e('2D, DOM, Text')
		.attr({ x: 0, y: 0 })
		.text('Victory!');

	this.restart_game = this.bind('KeyDown', function()
	{
		Crafty.scene('Game');
	});
}, function()
{
	this.unbind('KeyDown', this.restart_game);
});