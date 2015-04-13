///////////////////////////////////////////////
//                   Grid                    //
///////////////////////////////////////////////
Crafty.c('Grid',
{
    init: function()
    {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        });

    },

    // Locate this entity at the given position on the grid
    at: function(x, y)
    {
        if (x === undefined && y === undefined)
        {
            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        }
        else
        {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    },

    // Find current nearest tile
    /*tileCoordinates: function()
    {
        return {
            x: (Math.round( this.x / Game.map_grid.tile.width) * Game.map_grid.tile.width) / Game.map_grid.tile.width,
            y: (Math.round( this.y / Game.map_grid.tile.height) * Game.map_grid.tile.height) / Game.map_grid.tile.height
        }
    }*/
});

///////////////////////////////////////////////
//                  Actors                   //
///////////////////////////////////////////////
Crafty.c('Actor',
{
    init: function()
    {
        this.requires('2D, Canvas, Grid');
    }
});

Crafty.c('Edge',
{
    init: function()
    {
        this.requires('Actor, Color, Solid')
            .color('rgb(20, 125, 40)');
    },
});

Crafty.c('Block',
{
    init: function()
    {
        this.requires('Actor, Color, Solid')
            .color('rgb(20, 185, 40)');
    },
});

Crafty.c('Item',
{
    init: function()
    {
        this.requires('Actor, Color')
            .color('rgb(170, 125, 40)');
    },

    collect: function()
    {
        this.destroy();
        Crafty.trigger('ItemCollected', this);
    }
});

Crafty.c('Player',
{
    init: function()
    {
        this.requires('Actor, Fourway, Color, Collision, Gravity')
            .fourway(4)
            .color('rgb(20, 75, 40)')
            .onHit('Solid', this.stopMovement)
            .onHit('Item', this.collectItem);
            //.gravity('Solid');
    },

    // Stop Movement
    stopMovement: function(hitData)
    {
        switch (hitData.length)
        {
            case 1: // 1 tile
                var thisBeforeHit = {
                    x: this.x - this._movement.x,
                    y: this.y - this._movement.y
                };
                var hitObj = hitData[0].obj;
                var tile = Game.map_grid.tile;

                if ((thisBeforeHit.x - tile.width == hitObj.x) || (thisBeforeHit.x + tile.width == hitObj.x))
                {
                    this.x = thisBeforeHit.x;
                }
                else if ((thisBeforeHit.y - tile.height == hitObj.y) || (thisBeforeHit.y + tile.height == hitObj.y))
                {
                    this.y = thisBeforeHit.y;
                }

                break;
            case 2: // 2 tiles side by side
                if (hitData[0].obj.x == hitData[1].obj.x)
                {   
                    this.x -= this._movement.x;
                    break;
                }
                else if (hitData[0].obj.y == hitData[1].obj.y)
                {
                    this.y -= this._movement.y;
                    break;
                }
            default: // 3 tiles as corner or 2 tiles diagonal
                this.x -= this._movement.x;
                this.y -= this._movement.y;
        }
    },

    // Item handler
    collectItem: function(hitData)
    {
        var item = hitData[0].obj;
        item.collect();
    }
});