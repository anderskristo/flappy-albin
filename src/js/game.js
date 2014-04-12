(function() {
  'use strict';

  function Game() {

  }

  Game.prototype = {

    create: function () {

      // Set backgroundColor
      this.game.stage.backgroundColor = '#71c5cf';

      // Add Physics to game
      this.physics.startSystem(Phaser.Physics.ARCADE);      
      
      // This is Albin
      this.albin = this.add.sprite(100, 125, 'albin');

      // Add Physics to Albin
      this.physics.enable( [ this.albin ], Phaser.Physics.ARCADE);

      // Albin is falling
      this.albin.body.gravity.y = 1000;
            
    },

    update: function () {

      // If albin has fallen call the restart function
      if (this.albin.inWorld == false)
         this.restartGame();

      // Make Albin flap
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        jump();
      }

    },

    // Flap
    jump: function () {
      this.albin.body.gravity.y = -350;
    },

    // Restart game
    restartGame: function () {
      this.game.state.start('menu');
    }


  };

  window['flappy-albin'] = window['flappy-albin'] || {};
  window['flappy-albin'].Game = Game;

}());
