var menu = {

  create: function() {
      var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      spaceKey.onDown.add(this.start, this); 

      this.space = this.game.add.sprite(x, y, 'space');
      
      var styleIntro = { font: "48px Arial", fill: "#ffffff" };
      var styleDesc = { font: "30px Arial", fill: "#ffffff" };
      var x = game.world.width/2, y = game.world.height/2;

      var intro = this.game.add.text(x, y-120, "Flappy Albin", styleIntro);
      intro.anchor.setTo(0.5, 0.5);
      
      var desc = this.game.add.text(x, y-50, "Press space to start", styleDesc);
      desc.anchor.setTo(0.5, 0.5);
      
      this.albin = this.game.add.sprite(100, 245, 'albin');
      this.albin.anchor.setTo(0, 0);
      
      if (score > 0) {
          var score_label = this.game.add.text(x, y+50, "Score: " + score, styleDesc);
          score_label.anchor.setTo(0.5, 0.5);
      }
  },
  
  start: function() {
      this.game.state.start('play');
  }

};