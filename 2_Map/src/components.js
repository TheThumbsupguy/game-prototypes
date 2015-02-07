// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        });

    },

    // Locate this entity at the given position on the grid
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    },

    // Round to nearest tile
    tileCoordinates: function() {
        return {
            x: (Math.round( this.x / Game.map_grid.tile.width) * Game.map_grid.tile.width) / Game.map_grid.tile.width,
            y: (Math.round( this.y / Game.map_grid.tile.height) * Game.map_grid.tile.height) / Game.map_grid.tile.height
        }
    }
});

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    }
});

Crafty.c('Edge', {
    init: function() {
        this.requires('Actor, Color, Solid')
            .color('rgb(20, 125, 40)');
    },
});

Crafty.c('Block', {
    init: function() {
        this.requires('Actor, Color, Solid')
            .color('rgb(20, 185, 40)');
    },
});

Crafty.c('Player', {
    init: function() {
        this.requires('Actor, Fourway, Color, Collision')
            .fourway(4)
            .color('black')
            .stopOnSolids();
    },

    // Registers a stop-movement function to be called when
    // this entity hits an entity with the "Solid" component
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
     
        return this;
    }, 

    // Stop Movement
    stopMovement: function(hitData) {
        //this._speed = 0;

        //console.log(hitData);
        //console.log(this.tileCoordinates());

        var thisTile = this.tileCoordinates();

        // Check each hitData
        for (var i = hitData.length - 1; i >= 0; i--) {
            var hitTile = hitData[i].obj.tileCoordinates();

            if (this._movement.x) {
                if ((thisTile.x == (hitTile.x + 1) || thisTile.x == (hitTile.x - 1)) && thisTile.y == hitTile.y) {
                    this.x -= this._movement.x;
                }
            }
            if (this._movement.y) {
                if ((thisTile.y == (hitTile.y + 1) || thisTile.y == (hitTile.y - 1)) && thisTile.x == hitTile.x) {
                    this.y -= this._movement.y;
                }
            }
        };

    } 
});