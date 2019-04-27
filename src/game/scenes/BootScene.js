import {Scene} from 'phaser'
import sky from '@/game/assets/prova.png';
import bomb from '@/game/assets/bomb.png';
import barrera from '@/game/assets/barrera2.png';
import barrera2 from '@/game/assets/barrera3.png';
import barrera3 from '@/game/assets/barrera4.png';
import barrera_colors_taronja from '@/game/assets/barrera-colors.png';
import barrera_colors_blau from '@/game/assets/barrera-colors-1.png';
import creu from '@/game/assets/creuv.png';
import creub from '@/game/assets/creub.png';
import creut from '@/game/assets/creut.png';
import forma from '@/game/assets/forma.png';
import estelap1 from '@/game/assets/estela_blava.png';
import estelap2 from '@/game/assets/estela_vermella.png';
import flagN from '@/game/assets/flago.png';
import flagA from '@/game/assets/flagb.png';
import baseA from '@/game/assets/baseA.png';
import baseN from '@/game/assets/baseN.png';

export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'})
    }

    preload() {
        this.load.image('sky', sky);
        this.load.image('bomb', bomb);
        this.load.image('barrera', barrera);
        this.load.image('barrera2', barrera2);
        this.load.image('barrera3', barrera3);
        this.load.image('barrera_colors_taronja', barrera_colors_taronja);
        this.load.image('barrera_colors_blau', barrera_colors_blau);
        this.load.image('creu', creu);
        this.load.image('creub', creub);
        this.load.image('creut', creut);
        this.load.image('forma', forma);
        this.load.image('estela_blava', estelap1)
        this.load.image('estela_vermella', estelap2)
        this.load.image('flagN', flagN)
        this.load.image('flagA', flagA)
        this.load.image('baseA', baseA)
        this.load.image('baseN', baseN)
        // this.load.audio('thud', ['assets/thud.mp3', 'assets/thud.ogg'])
    }

    create() {
        this.scene.start('PlayScene')
    }
}
