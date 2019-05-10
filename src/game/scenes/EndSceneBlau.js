import {Scene} from 'phaser'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'EndSceneBlau'});
    }

    init (equips)
    {
        this.add.text(500, 315, equips.equip_taronja.puntuacio).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(645, 315, equips.equip_taronja.kills).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(770, 315, equips.equip_taronja.deads).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(890, 315, equips.equip_taronja.banderes).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);

        this.add.text(500, 200, equips.equip_blau.puntuacio).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(645, 200, equips.equip_blau.kills).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(770, 200, equips.equip_blau.deads).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
        this.add.text(890, 200, equips.equip_blau.banderes).setFontFamily('Arial').setFontSize(24).setColor('#000000').setInteractive().setDepth(1);
    }

    preload() {

        this.add.image(600, 300, 'win_jug2');


    }
    create() {

    }
}
