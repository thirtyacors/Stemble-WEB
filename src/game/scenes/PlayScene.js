import { Scene } from 'phaser';

var keys;
var player1;
var player2;
var estela;
var velocitat = 1;
var rotacio = 0.05;
var barrera1;
var barrera2;
var barrera3;
var barrera4;
var barrera5;
var barrera6;
var barrera_colors1;
var barrera_colors2;
var creu;
var creu_blau;
var creu_taronja;
var creu1;
var creu_blau1;
var creu_taronja1;
var forma;

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' });
  }

  create () {
    this.add.image(600, 300, 'sky');

    barrera1=this.physics.add.staticImage(600, 590,'barrera');
    barrera2=this.physics.add.staticImage(600,12,'barrera');
    barrera3=this.physics.add.staticImage(1190, 300, 'barrera2');
    barrera4=this.physics.add.staticImage(14, 300, 'barrera2');
    barrera_colors1=this.physics.add.staticImage(995, 155, 'barrera_colors_blau');
    barrera_colors2=this.physics.add.staticImage(205, 445, 'barrera_colors_taronja');
    creu=this.physics.add.staticImage(348, 157, 'creu');
    creu1=this.physics.add.staticImage(852, 444, 'creu');
    creu_blau=this.physics.add.staticImage(900, 444, 'creub');
    creu_blau1=this.physics.add.staticImage(805, 444, 'creub');
    creu_taronja=this.physics.add.staticImage(396, 157, 'creut');
    creu_taronja1=this.physics.add.staticImage(300, 157, 'creut');
    forma= this.physics.add.staticImage(600, 300, 'forma');



    player1 = this.physics.add.image(100, 100, 'bomb');
    player1.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

    player2 = this.physics.add.image(780, 580, 'bomb');
    player2.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

	// enable worldbounds collision event
/*
    player1 = this.physics.add.sprite(100, 100, 'bomb');
    player1.setCollideWorldBounds(true);
    player1.body.onWorldBounds = true; // enable worldbounds collision event
    player1.rotation = Math.PI;

	player2 = this.physics.add.sprite(780, 580, 'bomb');
    player2.setCollideWorldBounds(true);
    player2.body.onWorldBounds = true; //enable worldbounds collision event
    player2.rotation = Math.PI;
*/


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
    this.physics.world.collide([player1,player2], [barrera1, barrera2, barrera3, barrera4, barrera5, barrera6, barrera_colors1, barrera_colors2, creu, creu_taronja, creu_blau,
      creu1, creu_taronja1, creu_blau1, forma], function(){
            console.log("1");
      });

    forma.angle += 0.5;
    /*
    creu.angle += 0.5;
    creu1.angle += 0.5;
    creu_blau.angle += 0.5;
    creu_blau1.angle += 0.5;
    creu_taronja.angle += 0.5;
    creu_taronja1.angle += 0.5;

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
