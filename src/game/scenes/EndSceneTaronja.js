import {Scene} from 'phaser'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'EndSceneTaronja'});
    }

	init (equips)
    {
        this.add.text(500, 305, equips.equip_blau.puntuacio).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(645, 305, equips.equip_blau.kills).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(770, 305, equips.equip_blau.deads).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(890,  305, equips.equip_blau.banderes).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);

        this.add.text(500, 200, equips.equip_taronja.puntuacio).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(645, 200, equips.equip_taronja.kills).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(770, 200, equips.equip_taronja.deads).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(890, 200, equips.equip_taronja.banderes).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
    }

    preload() {

        this.add.image(600, 300, 'win_jug1');

    }
    create() {

    }
}
