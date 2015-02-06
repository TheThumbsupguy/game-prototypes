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
		Crafty.e('Actor, Color, Fourway')
			.attr({x: 20, y: 20, w: 20, h: 20})
			.color('black')
			.fourway(3)
			.bind('EnterFrame', function() {

				// x boundaries
				if (this.x < 0) this.attr({ x: 0})
				else if (this.x + this.w > Game.width) this.attr({ x: Game.width - this.w });

				// y boundaries
				if (this.y < 0) this.attr({ y: 0})
				else if (this.y + this.h > Game.height) this.attr({ y: Game.height - this.h });

			});

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