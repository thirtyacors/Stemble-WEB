import { Scene } from 'phaser';

// CONTROLS
var keys;

// MAPA
var obstacles_mapa;
// JUGADORS
var player1;
var estelap1;
var last_estelap1;

var player2;
var estelap2;
var last_estelap2;

//OBJECTES
var base;
var flag;
// VARIABLES EDITABLES
var max_last_estela = 5;
var gap_estela = 0;
var max_gap = 10;

var velocitat = 1;
var rotacio = 0.05;
var maxEstela = 20 - max_last_estela;

var posInicialJug1 = [1105, 95];
var posInicialJug2 = [95, 505];

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' });
  }

  create () {
    this.add.image(600, 300, 'sky');

    obstacles_mapa = this.physics.add.group();
    obstacles_mapa.create(600,590,'barrera');
    obstacles_mapa.create(600,12,'barrera');
    obstacles_mapa.create(1190, 300, 'barrera2');
    obstacles_mapa.create(14, 300, 'barrera2');
    obstacles_mapa.create(995, 155, 'barrera_colors_blau');
    obstacles_mapa.create(205, 445, 'barrera_colors_taronja');
    obstacles_mapa.create(348, 157, 'creu');
    obstacles_mapa.create(852, 444, 'creu');
    obstacles_mapa.create(900, 444, 'creub');
    obstacles_mapa.create(805, 444, 'creub');
    obstacles_mapa.create(396, 157, 'creut');
    obstacles_mapa.create(300, 157, 'creut');
    obstacles_mapa.create(600, 300, 'forma');

    //Bases
    base = this.physics.add.staticGroup();
    base.create( posInicialJug2[0], posInicialJug2[1],'baseN').setScale(0.5).refreshBody().equipo = "orange";
    base.create(posInicialJug1[0], posInicialJug1[1],'baseA').setScale(0.5).refreshBody().equipo = "blue";

    //Jugadors
    player1 = this.physics.add.sprite( posInicialJug1[0],  posInicialJug1[1], 'bomb');
    player1.name = "Player1";
    player1.equipo = "blue";
    player1.bandera = undefined;

    player1.setCollideWorldBounds(true);
    player1.body.onWorldBounds = true;

    player2 = this.physics.add.sprite( posInicialJug2[0],  posInicialJug2[1], 'bomb');
    player2.name = "Player2";
    player2.setCollideWorldBounds(true);
    player2.body.onWorldBounds = true;
    player2.rotation = Math.PI;

    player2.equipo = "orange";
    player2.bandera = undefined;

    keys = this.input.keyboard.addKeys({
      left: 'left',
      right: 'right',
      a: 'a',
      d: 'd'
    });

    //Estela
    estelap1 = this.physics.add.group();
    last_estelap1 = this.physics.add.group();
    estelap2 = this.physics.add.group();
    last_estelap2 = this.physics.add.group();

    this.physics.add.overlap([player1,player2], estelap1, die, null, this);
    this.physics.add.overlap([player1,player2], estelap2, die, null, this);
    this.physics.add.overlap([player1,player2], obstacles_mapa, die, null, this);

    this.physics.add.overlap(player1, last_estelap2, die, null, this);
    this.physics.add.overlap(player2, last_estelap1, die, null, this);

    

    //Banderas
    flag = this.physics.add.staticGroup();
    flag.create(posInicialJug2[0]+10, posInicialJug2[1]-50,'flagN').setScale(0.03).refreshBody().equipo = "orange";
    flag.create(posInicialJug1[0]+10, posInicialJug1[1]-50,'flagA').setScale(0.03).refreshBody().equipo = "blue";

    //Iniciar banderas
    var flag1 = flag.getChildren()[0];
    var flag2 = flag.getChildren()[1];

    inicialitzarFlag(flag1);
    inicialitzarFlag(flag2);

    this.physics.add.overlap([player1,player2], flag, collectFlag, null, this);
    this.physics.add.overlap([player1,player2], base, enterBase, null, this);
  }

  update () {
    /*
    this.physics.world.collide([player1,player2], [barrera1, barrera2, barrera3, barrera4, barrera5, barrera6, barrera_colors1, barrera_colors2, creu, creu_taronja, creu_blau,
      creu1, creu_taronja1, creu_blau1, forma], function(){
            console.log("1");
      });
    */

    // MAPA
    for (var i = 6; i < obstacles_mapa.getChildren().length; i++)
      obstacles_mapa.getChildren()[i].angle += 0.5;

    // JUGADORS
    if (gap_estela >= max_gap) {
      // CREEM ESTELA P1
      if (estelap1.getChildren().length < maxEstela)
        last_estelap1.create(player1.x,player1.y,'estela_blava');
      else {
        last_estelap1.add(estelap1.getChildren()[0]);
        estelap1.remove(estelap1.getChildren()[0]);
        last_estelap1.getChildren()[last_estelap1.getChildren().length - 1].x = player1.x;
        last_estelap1.getChildren()[last_estelap1.getChildren().length - 1].y = player1.y;
      }
      last_estelap1.getChildren()[last_estelap1.getChildren().length - 1].rotation = player1.rotation;

      if (last_estelap1.getChildren().length >= max_last_estela)
      {
        estelap1.add(last_estelap1.getChildren()[0]);
        last_estelap1.remove(last_estelap1.getChildren()[0]);
      }

      // CREEM ESTELA P2
      if (estelap2.getChildren().length < maxEstela)
        last_estelap2.create(player2.x,player2.y,'estela_vermella');
      else {
        last_estelap2.add(estelap2.getChildren()[0]);
        estelap2.remove(estelap2.getChildren()[0]);
        last_estelap2.getChildren()[last_estelap2.getChildren().length - 1].x = player2.x;
        last_estelap2.getChildren()[last_estelap2.getChildren().length - 1].y = player2.y;
      }
      last_estelap2.getChildren()[last_estelap2.getChildren().length - 1].rotation = player2.rotation;

      if (last_estelap2.getChildren().length >= max_last_estela)
      {
        estelap2.add(last_estelap2.getChildren()[0]);
        last_estelap2.remove(last_estelap2.getChildren()[0]);
      }

      gap_estela = 0;
    }
    else
      gap_estela++;

    // APLICAR MOVIMENT AUTOMATIC
    // CONTROLS player1
    if (keys.left.isDown)
      player1.rotation -= rotacio;
    else if (keys.right.isDown)
      player1.rotation += rotacio;
    // CONTROLS player2
    if (keys.a.isDown)
      player2.rotation -= rotacio;
    else if (keys.d.isDown)
      player2.rotation += rotacio;

    // Calcular desplaçament player1
    player1.x += velocitat * Math.sin(-player1.rotation);
    player1.y += velocitat * Math.cos(-player1.rotation);
    // Calcular desplaçament player2
    player2.x += velocitat * Math.sin(-player2.rotation);
    player2.y += velocitat * Math.cos(-player2.rotation);

    //Moviment banderes
    flag.children.iterate(function (child) {

      if(child.follow != undefined){
        child.x = child.follow.x+10;
        child.y = child.follow.y-20;
        child.refreshBody();
      }
    });
  }
}

function die(player)
{
  console.log(player.name+" DIE");
}

//Si la bandera no es suya y no esta cogida, la coge
function collectFlag(player, flag){
  if(flag.equipo != player.equipo && flag.follow == undefined){
      
    flag.cogida = true;
    flag.follow = player;
    player.bandera = flag;
  }
}

//Si la base es suya y tiene una bandera +10 puntos
function enterBase(player, base){
  if(base.equipo == player.equipo && player.bandera != undefined){
     if(player.equipo == "blue"){
       //count2 +=10;
       //text2.setText(count2);
     }
     else if(player.equipo == "orange"){
      //count1+=10;
      //text1.setText(count1);
    }
    player.bandera.reset();
    player.bandera = undefined;

  }
}
//Inicialitza els atributs de la bandera
function inicialitzarFlag(flag){
    flag.posInicialX = flag.x;
    flag.posInicialY = flag.y;
    var res = function(){this.x = this.posInicialX;this.y = this.posInicialY;this.refreshBody();this.follow = undefined;};
    flag.reset = res;
    flag.follow = undefined;
}