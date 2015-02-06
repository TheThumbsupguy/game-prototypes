// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },

    // Locate this entity at the given position on the grid
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
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
        this._speed = 0;

        // hidData
        var obj = hitData[0].obj;

        console.log(this);

        if (this._movement.x) {
            if (this._movement.x > 0) console.log('Collide: Right');
            if (this._movement.x < 0) console.log('Collide: Left');

            this.x -= this._movement.x;
        }
        if (this._movement.y) {
            if (this._movement.y > 0) console.log('Collide: Bottom');
            if (this._movement.y < 0) console.log('Collide: Top');

            this.y -= this._movement.y;
        }
    } 
});