import { Scene } from 'phaser';

var keys;
var player1;
var player2;
var estela;
var velocitat = 1;
var rotacio = 0.05;

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' });
  }

  create () {
    let img = this.add.image(400, 300, 'sky');

	player1 = this.physics.add.sprite(20, 20, 'bomb');
    player1.setCollideWorldBounds(true);
    player1.body.onWorldBounds = true; // enable worldbounds collision event
    
	player2 = this.physics.add.sprite(780, 580, 'bomb');
    player2.setCollideWorldBounds(true);
    player2.body.onWorldBounds = true; // enable worldbounds collision event
    player2.rotation = Math.PI;
	
	//estela = this.physics.add.sprite(player2.x, player2.y, 'estela');
	//estela.setScale(20 / estela.width, 20 / estela.height);
	
	keys = this.input.keyboard.addKeys({
		//up: 'up',
		//down: 'down',
        //s: 's',
        //w: 'w',
		left: 'left',
		right: 'right',
		a: 'a',
		d: 'd'
	});

  }

  update () {
    /*
  // CONTROLS NO AUTOMATICS
	// CONTROLS player1
	if (keys.left.isDown)
    {
		player1.x -= 1;
    }
    else if (keys.right.isDown)
    {
        player1.x += 1;
    }

    if (keys.up.isDown)
    {
        player1.y -= 1;
    }
    else if (keys.down.isDown)
    {
        player1.y += 1;
    }
	
	// CONTROLS player2
	if (keys.a.isDown)
    {
		player2.x -= 1;
    }
    else if (keys.d.isDown)
    {
        player2.x += 1;
    }

    if (keys.w.isDown)
    {
        player2.y -= 1;
    }
    else if (keys.s.isDown)
    {
        player2.y += 1;
    }
    */

  // APLICAR MOVIMENT AUTOMATIC
    // CONTROLS player1
    if (keys.left.isDown)
    {
        player1.rotation += rotacio;
    }
    else if (keys.right.isDown)
    {
        player1.rotation -= rotacio;
    }

    // CONTROLS player2
    if (keys.a.isDown)
    {
        player2.rotation += rotacio;
    }
    else if (keys.d.isDown)
    {
        player2.rotation -= rotacio;
    }

    player1.x += velocitat * Math.sin(player1.rotation);
    player1.y += velocitat * Math.cos(player1.rotation);

    player2.x += velocitat * Math.sin(player2.rotation);
    player2.y += velocitat * Math.cos(player2.rotation);

  }
}
