import Phaser from "phaser";

var claviercinematique;
var cpt = 2;
var a = true;
//var musique;

export default class cinematique1 extends Phaser.Scene {
  constructor() {
    super({ key: "cinematique1" }); // mettre le meme nom que le nom de la classe
  }

  preload() {
    this.load.image("f1", "src/assets/Screen1.png");
    this.load.image("f2", "src/assets/Screen2.png");
    this.load.image("f3", "src/assets/Screen3.png");
    this.load.image("f4", "src/assets/Screen4.png");
    this.load.image("f5", "src/assets/Screen5.png");
    this.load.image("f6", "src/assets/Screen6.png");
    this.load.image("f7", "src/assets/Screen7.png");
    //this.load.audio("Dio_Theme", "src/assets/Dio theme.mp3");
  }

  create() {
    this.add.image(960, 540, "f1");

    claviercinematique = this.input.keyboard.createCursorKeys();
    //musique = this.sound.add("Dio_Theme");
    //musique.play();
  }

  update() {
    if (claviercinematique.space.isDown && a == true) {
      if (cpt == 2) {
        this.add.image(960, 540, "f2");
      } else if (cpt == 3) {
        this.add.image(960, 540, "f3");
      } else if (cpt == 4) {
        this.add.image(960, 540, "f4");
      } else if (cpt == 5) {
        this.add.image(960, 540, "f5");
      } else if (cpt == 6) {
        this.add.image(960, 540, "f6");
      } else if (cpt == 7) {
        this.add.image(960, 540, "f7");
      } else if (cpt == 8) {
        //musique.stop();
        this.scene.start("round1");
      }
      cpt += 1;
      a = false;
    }
    if (claviercinematique.space.isUp) {
      a = true;
    }
  }
}
