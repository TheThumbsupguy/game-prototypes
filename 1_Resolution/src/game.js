var stageW = 800;
var stageH = 450;

var Game = {
	// Initialize and start our game
	start: function() {

		// Stage
		Crafty.init(stageW, stageH, document.getElementById('game'));

		// Platform
		Crafty.e('Platform, 2D, Canvas, Color')
		  .attr({x: 0, y: 300, w: 800, h: 10})
		  .color('green');

		// Platform
		Crafty.e('Platform, 2D, Canvas, Color')
		  .attr({x: 300, y: 250, w: 50, h: 10})
		  .color('green');

		// Platform
		Crafty.e('Platform, 2D, Canvas, Color')
		  .attr({x: 400, y: 190, w: 50, h: 10})
		  .color('green');

		// Player Component
		Crafty.c('Player', {
			init: function() {
				this.requires('2D, DOM, Color, Twoway, Collision')
					.attr({x: 0, y: 0, w: 50, h: 50})
					.color('black')
					.gravity('Platform')
					.twoway(3)
					.onHit('Platform', function(hitData) {
						if(this._movement) {
							// when hit from left, bottom or right side
							this.x -= this._movement.x;
							//this._up = false;
						}
					})
					.bind('EnterFrame', function() {
						if (this.x >= stageW - this.w) {
							this.x = stageW - this.w;
						}

						if (this.x <= 0) {
							this.x = 0;
						}
					});			
			}
		});

		// Player Entity
		var player = Crafty.e('Player');

		// Follower Component
		Crafty.c('Follower', {
			_speed: 1,
			_playerOffset: 55,
			_canMoveLeft: true,
			_canMoveRight: true,

			init: function() {
				this.bind('EnterFrame', this._moveHandler);

				this.checkHits('Platform');
				this.bind('HitOn', function(hitData) {
					if (this.x < hitData[0].obj.x) {
						this._canMoveRight = false;
					}
					else {
						this._canMoveLeft = false;
					}
				});
				this.bind('HitOff', function(comp) {
					this._canMoveLeft = true;
					this._canMoveRight = true;
				});
			},

			_moveHandler: function() {
				if (this.x < player.x - this._playerOffset && this._canMoveRight) {
					this.x += this._speed;
				}
				else if (this.x > player.x + this._playerOffset && this._canMoveLeft)
				{
					this.x -= this._speed;
				}
			}
		});

		// Follower Entity
		Crafty.e('2D, DOM, Color, Gravity, Collision, Platform, Follower')
			.attr({x: 500, y: 0, w: 50, h: 50})
			.color('grey')
			.gravity('Platform');
	}
} 