import {Scene} from 'phaser'
import sky from '@/game/assets/prova.png';
import bomb from '@/game/assets/bomb.png';
import barrera from '@/game/assets/barrera.png';

export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'})
    }

    preload() {
        this.load.image('sky', sky);
        this.load.image('bomb', bomb);
        this.load.image('barrera', barrera);
        // this.load.audio('thud', ['assets/thud.mp3', 'assets/thud.ogg'])
    }

    create() {
        this.scene.start('PlayScene')
    }
}
