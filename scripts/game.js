var game = new Phaser.Game(600, 490, Phaser.AUTO, 'game_div');

var score = 0;

game.state.add('boot', boot);  
game.state.add('menu', menu);
game.state.add('play', play);

game.state.start('boot');