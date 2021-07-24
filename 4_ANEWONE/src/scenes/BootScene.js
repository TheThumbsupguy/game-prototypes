import Phaser from 'phaser';
import images from 'url:../../src/assets/*.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }

  init() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    this.bg = this.add.rectangle(width / 2, height / 2, width / 2, height / 5, 0x666666);
    this.bar = this.add.rectangle(this.bg.x, this.bg.y, this.bg.width, this.bg.height, 0xffffff).setScale(0, 1);
  }

  preload() {
    this.load.spritesheet('player',
      images.player,
      { frameWidth: 32, frameHeight: 32 }
    );

    this.load.on('progress', progress => {
      this.bar.setScale(progress, 1);
    });
  }

  update() {
    this.bg.destroy();
    this.bar.destroy();
    this.scene.start('play');
  }
}
