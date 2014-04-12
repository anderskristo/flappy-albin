var play = {
      
  create: function () { 
    // Display albin on the scene
    this.albin = this.game.add.sprite(100, 245, 'albin');
    this.albin.anchor.setTo(-0.2, 0.5);
    
    // Add some gravity to Albin
    this.albin.body.gravity.y = 1000; 

    // Make Albin flap when smashing spacebar
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.flap, this); 

    // Create a group to make pipes
    this.pipes = game.add.group();
    this.pipes.createMultiple(20, 'pipe');  

    // Create the sound
    // this.flapSound = this.game.add.audio('flap');

    // Set a timer to add every 1,5 sec
    this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);           

    // Score label
    score = -1;
    var style = { font: "30px Arial", fill: "#ffffff" };
    this.label_score = this.game.add.text(20, 20, "0", style);  
  },
  
  update: function () {
    // If albin is outside the scene, then restart the game
    if (this.albin.inWorld == false)
        this.restartGame(); 

    if (this.albin.angle < 20)
        this.albin.angle += 1;

    // If albin collides with a pipe then restart the game
    this.game.physics.overlap(this.albin, this.pipes, this.hitPipe, null, this);      
  },

  // Make Albin flap
  flap: function () {
    // Adding sound when Albin flaps
    // this.flapSound.play();

    // Disable the flap function when albin is dead
    if (this.albin.alive == false)
      return; 

    this.albin.body.velocity.y = -350;

    // Make albin anmiated
    var animation = this.game.add.tween(this.albin).to({angle: -20}, 100).start();    
  },

  // Restart the game
  restartGame: function () {
    // Restarting/removing the timer
    this.game.time.events.remove(this.timer);

    // Restarts the game
    this.game.state.start('menu');
  },

  hitPipe: function () {
    // if Albin has already hit the pipe, then we have nothing to do..
    if (this.albin.alive == false)
       return;

    // Set the alive property to false
    this.albin.alive = false;

    // Prevent new pipes from appering 
    this.game.time.events.remove(this.timer);

    // Look through all pipes, and then stop thier movments
    this.pipes.forEachAlive(function (p) {
      p.body.velocity.x = 0;
    }, this);
  },
  
  addOnePipe: function (x, y) {
    // Get the first dead pipe of our group
    var pipe = this.pipes.getFirstDead();

    // Set the new position of the pipe
    pipe.reset(x, y);

     // Add velocity to the pipe to make it move left
    pipe.body.velocity.x = -300; 
           
    // Kill the pipe when it's no longer visible 
    pipe.outOfBoundsKill = true;
  },

  addRowOfPipes: function () {        
    // Add a row of 6 pipes with a hole somewhere in the middle
    // Set a timer to add every 1,5 sec
    var hole = Math.floor(Math.random()*5)+1;
    
    // Score label
    for (var i = 0; i < 8; i++)
      if (i != hole && i != hole +1) 
        this.addOnePipe(600, i*60+10);

    score += 1;
    this.label_score.content = score;  
  }
};