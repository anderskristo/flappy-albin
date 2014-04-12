var boot = {

	preload: function () {

		this.game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('albin', 'assets/albin.png');
		this.game.load.image('pipe', 'assets/pipe.png');
		// this.game.load.image('flap', 'assets/flap.wav');

	},

	create: function () {

		this.game.state.start('menu');

	}

};