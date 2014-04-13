var boot = {

	preload: function () {

		this.game.stage.backgroundColor = '#000';
		this.game.load.image('space', 'assets/space.jpg');
		this.game.load.image('albin', 'assets/albin.png');
		this.game.load.image('beer', 'assets/beer.png');

	},

	create: function () {

		this.game.state.start('menu');

	}

};