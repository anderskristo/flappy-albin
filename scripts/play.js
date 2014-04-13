var play = {
      
  create: function () {         
    this.space = this.game.add.sprite(0, 0, 'space');
    this.space.body.velocity.x = -10;

    this.albin = this.game.add.sprite(100, 245, 'albin');
    this.albin.anchor.setTo(-0.2, 0.5);
    this.albin.body.gravity.y = 1000;
        
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.flap, this);

    this.beers = game.add.group();
    this.beers.createMultiple(20, 'beer');

    this.timer = this.game.time.events.loop(1500, this.addRowOfbeers, this);
    
    score = -1;
    var style = { font: "30px Arial", fill: "#ffffff" };
    this.label_score = this.game.add.text(20, 20, "0", style);
  },
  
  update: function () {          
    if (this.albin.inWorld == false)
        this.restartGame();

    if (this.albin.angle < 20)
        this.albin.angle += 1;
    
    this.game.physics.overlap(this.albin, this.beers, this.hitbeer, null, this);
  },
  
  flap: function () {    
    if (this.albin.alive == false)
      return;

    this.albin.body.velocity.y = -350;
    
    var animation = this.game.add.tween(this.albin).to({angle: -20}, 100).start();
  },
  
  restartGame: function () {
    this.game.time.events.remove(this.timer);
    this.game.state.start('menu');
  },

  hitbeer: function () {
    if (this.albin.alive == false)
      return;
    
    this.albin.alive = false;
    this.game.time.events.remove(this.timer);
    
    this.beers.forEachAlive(function (p) {
      p.body.velocity.x = 0;
    }, this);
  },
  
  addOnebeer: function (x, y) {
    var beer = this.beers.getFirstDead();
    
    beer.reset(x, y);
    beer.body.velocity.x = -300;
    beer.outOfBoundsKill = true;
  },

  addRowOfbeers: function () {
    var hole = Math.floor(Math.random()*5)+1;
        
    for (var i = 0; i < 8; i++)
      if (i != hole && i != hole +1)
        this.addOnebeer(600, i*60+10);

    score += 1;
    this.label_score.content = score;
  }
};