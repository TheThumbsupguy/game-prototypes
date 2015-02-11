Game = {

	map_grid:
	{
		width: 48,
		height: 27,
		tile:
		{
			width: 20,
			height: 20
		}
	},
	
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	}, 
	height: function()
	{
		return this.map_grid.height * this.map_grid.tile.height;
	}, 

	start: function()
	{
		// Start
		Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
		Crafty.background('rgb(249, 223, 125)');

		Crafty.scene('Game');
	}
	
} 