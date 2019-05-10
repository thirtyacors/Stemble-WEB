import {Scene} from 'phaser'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'EndScene'});
    }
	
	init (equips)
    {
		console.log(equips.equip_blau.puntuacio);
    }

    preload() {
        
    }

    create() {
        
    }
}
