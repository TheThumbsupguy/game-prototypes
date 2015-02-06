Game = {

	map_grid: {
		width: 48, // 960px
		height: 27, // 540px
		tile: {
			width: 20,
			height: 20
		}
	},
	
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	}, 
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	}, 

	start: function() {
		// Start
		Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
		Crafty.background('#eee');

		// Player
		Crafty.e('Player').at(5, 5);

		// Color in the grid
		for (var x = 0; x < Game.map_grid.width; x++) {
		    for (var y = 0; y < Game.map_grid.height; y++) {
		        var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
		 
		        if (at_edge) {
					// Edge Tile
					Crafty.e('Edge').at(x, y);
		        }
		        else if (Math.random() < 0.06) {
					// Block Tile
					Crafty.e('Block').at(x, y);
		        }
		    }
		}
	}
} 