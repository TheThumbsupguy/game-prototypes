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
        var prev = null;
        var actual = null
        for (var i = 0; i < hitData.length; i++) {
            //var hitTile = hitData[i].obj.tileCoordinates();
            var hitObj = hitData[i].obj;
            //console.log(hitObj);

            // Set actual coordinates
            if ( ! actual) {
                actual = {
                    x: this.x - this._movement.x,
                    y: this.y - this._movement.y
                };
            }

            // No diagonals
            if ((Math.abs(actual.x - hitObj.x) == Game.map_grid.tile.width) && Math.abs(actual.y - hitObj.y) == Game.map_grid.tile.height) {
                continue;
            }

            // If hitting two tiles side by side, only set this.x back once.
            if (prev) {
                if ((hitObj.x == prev.x || hitObj.y == prev.y) && hitData.length == 2) {
                    continue;
                }
            }
            prev = {x: hitObj.x, y:hitObj.y };

            // Check collision type
            var type = null;
           
            

            //console.log('-----' + i + '-----');
            //console.log('X: ' + Math.abs(actual.x - hitObj.x));
            //console.log('Y: ' + Math.abs(actual.y - hitObj.y));
            if (Math.abs(actual.x - hitObj.x) == Game.map_grid.tile.width) type = 'horizontal';
            else if (Math.abs(actual.y - hitObj.y) == Game.map_grid.tile.height) type = 'vertical';

            
            if (/*this._movement.x &&*/ type == 'horizontal') {
                //if ((thisTile.x == (hitTile.x + 1) || thisTile.x == (hitTile.x - 1)) && thisTile.y == hitTile.y) {
                    this.x = actual.x;
                    if (type == 'diagonal') {
                        this.y = actual.y;
                    }
                    continue;
                //}
            }
            if (/*this._movement.y &&*/ type == 'vertical') {
                //if ((thisTile.y == (hitTile.y + 1) || thisTile.y == (hitTile.y - 1)) && thisTile.x == hitTile.x) {
                    this.y = actual.y;
                    continue;
                //}
            }
        };

    } 
});