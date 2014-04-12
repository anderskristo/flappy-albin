// Initialize Phaser
var game = new Phaser.Game(600, 490, Phaser.AUTO, 'game_div');

// Our 'score' global variable
var score = 0;

// Define all the states
game.state.add('boot', boot);  
game.state.add('menu', menu);
game.state.add('play', play);

// Start with the 'load' state
game.state.start('boot');