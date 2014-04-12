var boot = {

	preload: function () {

		this.game.stage.backgroundColor = '#000';
		this.game.load.image('space', 'assets/space.jpg');
		this.game.load.image('albin', 'assets/albin.png');
		this.game.load.image('pipe', 'assets/pipe.png');
		// this.game.load.image('flap', 'assets/flap.wav');

	},

	create: function () {

		this.game.state.start('menu');

	}

};