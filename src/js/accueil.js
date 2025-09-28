import Phaser from "phaser";

export default class accueil extends Phaser.Scene {
  constructor() {
    super({ key: "accueil" }); // mettre le meme nom que le nom de la classe
  }

  preload() {
    this.load.image("wallpaper", "src/assets/Wallpaper.jpg");
    this.load.image("start", "src/assets/Start.png");
    this.load.image("logo", "src/assets/Jojo_logo.png");
  }

  create() {
    this.add.image(960, 540, "wallpaper");
    this.add.image(500, 100, "logo");

    var bouton_play = this.add.image(960, 800, "start").setDepth(1);

    //on rend le bouton interratif
    bouton_play.setInteractive();

    //Cas ou la souris passe sur le bouton play
    bouton_play.on("pointerover", () => {});

    //Cas ou la souris ne passe plus sur le bouton play
    bouton_play.on("pointerout", () => {});

    //Cas ou la sourris clique sur le bouton play :
    // on lance le niveau 1
    bouton_play.on("pointerup", () => {
      this.scene.start("cinematique1");
    });
  }

  update() {}
}
