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

    // Find current nearest tile
    /*tileCoordinates: function() {
        return {
            x: (Math.round( this.x / Game.map_grid.tile.width) * Game.map_grid.tile.width) / Game.map_grid.tile.width,
            y: (Math.round( this.y / Game.map_grid.tile.height) * Game.map_grid.tile.height) / Game.map_grid.tile.height
        }
    }*/
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
        
        var prev = null;
        var actual = null;

        // Check each hitData
        for (var i = 0; i < hitData.length; i++) {
            var hitObj = hitData[i].obj;

            // Get actual coordinates for 'this' before the collision
            if ( ! actual) {
                actual = {
                    x: this.x - this._movement.x,
                    y: this.y - this._movement.y
                };
            }

            // If hitData contains more than one tile, ignore diagonal collisions.
            if
            (
                hitData.length > 1
                &&
                Math.abs(actual.x - hitObj.x) == Game.map_grid.tile.width
                &&
                Math.abs(actual.y - hitObj.y) == Game.map_grid.tile.height
            )
            {
                continue;
            }

            // If hitting two tiles side by side, push 'this' back once.
            if (prev) {
                if (hitData.length == 2 && (hitObj.x == prev.x || hitObj.y == prev.y)) {
                    continue;
                }
            }
            prev = {x: hitObj.x, y:hitObj.y };

            //console.log('-----' + i + '-----');
            //console.log('X: ' + Math.abs(actual.x - hitObj.x));
            //console.log('Y: ' + Math.abs(actual.y - hitObj.y));

            // Check collision type
            if (Math.abs(actual.x - hitObj.x) == Game.map_grid.tile.width) {
                // Horizontal
                this.x = actual.x;
                continue;
            }
            else if (Math.abs(actual.y - hitObj.y) == Game.map_grid.tile.height) {
                // Vertical
                this.y = actual.y;
                continue;
            }
        };

    } 
});