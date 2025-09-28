import Phaser from "phaser";

var Dio;
var Jotaro;
var Groupe_Plateformes;
var Z;
var Q;
var S;
var D;
var A;
var E;
var R;
var F;

var O;
var K;
var L;
var M;
var I;
var P;
var U;
var J;

/*
var OraSound;
var SPSound;
var SPRushSound;
var TWSound;
var MudaSound;
var TWRushSound;

var musiqueOSTJotaro;
*/

export default class round1 extends Phaser.Scene {
  constructor() {
    super({
      key: "round1"
    });
  }
  preload() {
    this.load.image("fond", "src/assets/Map1.jpg");
    this.load.image("plateformesol", "src/assets/Plateforme.png");
    this.load.image("Dio_icon", "src/assets/Dio-png.png");
    this.load.image("Jotaro_icon", "src/assets/Jotaro-png.png");

    /*
    this.load.audio("Ora_Sound", "src/assets/SP-Ora.mp3");
    this.load.audio("SP_Rush_Sound", "src/assets/SP-Rush.mp3");
    this.load.audio("SP_Sound", "src/assets/SP.mp3");

    this.load.audio("Muda_Sound", "src/assets/TW-Muda.mp3");
    this.load.audio("TW_Rush_Sound", "src/assets/TW-Rush.mp3");
    this.load.audio("TW_Sound", "src/assets/TW.mp3");

    this.load.audio("Jotaro_Theme", "src/assets/Jotaro theme.mp3");
    */

    this.load.spritesheet("Dio_Standing_D", "src/assets/dio_standing_d.png", {
      frameWidth: 201,
      frameHeight: 363
    });
    this.load.spritesheet("Dio_Standing_G", "src/assets/dio_standing_g.png", {
      frameWidth: 201,
      frameHeight: 363
    });
    this.load.spritesheet("Dio_Walking_D", "src/assets/dio_walking_d.png", {
      frameWidth: 264,
      frameHeight: 351
    });
    this.load.spritesheet("Dio_Walking_G", "src/assets/dio_walking_g.png", {
      frameWidth: 264,
      frameHeight: 351
    });

    this.load.spritesheet("Dio_Air_D", "src/assets/dio_air_d.png", {
      frameWidth: 189,
      frameHeight: 444
    });
    this.load.spritesheet("Dio_Air_G", "src/assets/dio_air_g.png", {
      frameWidth: 189,
      frameHeight: 444
    });
    this.load.spritesheet(
      "Dio_Standing_TW_D",
      "src/assets/dio_standing_tw_d.png",
      {
        frameWidth: 300,
        frameHeight: 435
      }
    );
    this.load.spritesheet(
      "Dio_Standing_TW_G",
      "src/assets/dio_standing_tw_g.png",
      {
        frameWidth: 300,
        frameHeight: 435
      }
    );
    this.load.spritesheet(
      "Dio_Walking_TW_D",
      "src/assets/dio_walking_tw_d.png",
      {
        frameWidth: 294,
        frameHeight: 429
      }
    );
    this.load.spritesheet(
      "Dio_Walking_TW_G",
      "src/assets/dio_walking_tw_g.png",
      {
        frameWidth: 294,
        frameHeight: 429
      }
    );
    this.load.spritesheet(
      "Dio_Barrage_Muda_D",
      "src/assets/dio_barrage_muda_d.png",
      {
        frameWidth: 700,
        frameHeight: 426
      }
    );
    this.load.spritesheet(
      "Dio_Barrage_Muda_G",
      "src/assets/dio_barrage_muda_g.png",
      {
        frameWidth: 700,
        frameHeight: 426
      }
    );
    this.load.spritesheet("Dio_Air_TW_D", "src/assets/dio_air_tw_d.png", {
      frameWidth: 356,
      frameHeight: 444
    });
    this.load.spritesheet("Dio_Air_TW_G", "src/assets/dio_air_tw_g.png", {
      frameWidth: 356,
      frameHeight: 444
    });
    this.load.spritesheet("Dio_Muda_D", "src/assets/dio_muda_d.png", {
      frameWidth: 528,
      frameHeight: 420
    });
    this.load.spritesheet("Dio_Muda_G", "src/assets/dio_muda_g.png", {
      frameWidth: 528,
      frameHeight: 420
    });

    this.load.spritesheet(
      "Jotaro_Standing_D",
      "src/assets/jotaro_standing_d.png",
      {
        frameWidth: 213,
        frameHeight: 357
      }
    );
    this.load.spritesheet(
      "Jotaro_Standing_G",
      "src/assets/jotaro_standing_g.png",
      {
        frameWidth: 213,
        frameHeight: 357
      }
    );
    this.load.spritesheet(
      "Jotaro_Walking_D",
      "src/assets/jotaro_walking_d.png",
      {
        frameWidth: 255,
        frameHeight: 345
      }
    );
    this.load.spritesheet(
      "Jotaro_Walking_G",
      "src/assets/jotaro_walking_g.png",
      {
        frameWidth: 255,
        frameHeight: 345
      }
    );
    this.load.spritesheet("Jotaro_Air_D", "src/assets/jotaro_air_d.png", {
      frameWidth: 348,
      frameHeight: 270
    });
    this.load.spritesheet("Jotaro_Air_G", "src/assets/jotaro_air_g.png", {
      frameWidth: 348,
      frameHeight: 270
    });
    this.load.spritesheet(
      "Jotaro_Standing_SP_D",
      "src/assets/jotaro_standing_sp_d.png",
      {
        frameWidth: 370,
        frameHeight: 465
      }
    );
    this.load.spritesheet(
      "Jotaro_Standing_SP_G",
      "src/assets/jotaro_standing_sp_g.png",
      {
        frameWidth: 370,
        frameHeight: 465
      }
    );
    this.load.spritesheet(
      "Jotaro_Walking_SP_D",
      "src/assets/jotaro_walking_sp_d.png",
      {
        frameWidth: 420,
        frameHeight: 465
      }
    );
    this.load.spritesheet(
      "Jotaro_Walking_SP_G",
      "src/assets/jotaro_walking_sp_g.png",
      {
        frameWidth: 420,
        frameHeight: 465
      }
    );
    this.load.spritesheet(
      "Jotaro_Barrage_Ora_D",
      "src/assets/jotaro_barrage_ora_d.png",
      {
        frameWidth: 560,
        frameHeight: 458
      }
    );
    this.load.spritesheet(
      "Jotaro_Barrage_Ora_G",
      "src/assets/jotaro_barrage_ora_g.png",
      {
        frameWidth: 560,
        frameHeight: 458
      }
    );
    this.load.spritesheet("Jotaro_Air_SP_D", "src/assets/jotaro_air_sp_d.png", {
      frameWidth: 350,
      frameHeight: 399
    });
    this.load.spritesheet("Jotaro_Air_SP_G", "src/assets/jotaro_air_sp_g.png", {
      frameWidth: 350,
      frameHeight: 399
    });
    this.load.spritesheet("Jotaro_Ora_D", "src/assets/jotaro_ora_d.png", {
      frameWidth: 600,
      frameHeight: 420
    });
    this.load.spritesheet("Jotaro_Ora_G", "src/assets/jotaro_ora_g.png", {
      frameWidth: 600,
      frameHeight: 420
    });
  }

  create() {
    Groupe_Plateformes = this.physics.add.staticGroup();
    Groupe_Plateformes.create(960, 1000, "plateformesol");
    this.add.image(960, 540, "fond");

    /*
    OraSound = this.sound.add("Ora_Sound");
    SPSound = this.sound.add("SP_Sound");
    SPRushSound = this.sound.add("SP_Rush_Sound");
    TWSound = this.sound.add("TW_Sound");
    MudaSound = this.sound.add("Muda_Sound");
    TWRushSound = this.sound.add("TW_Rush_Sound");

    musiqueOSTJotaro = this.sound.add("Jotaro_Theme");
    musiqueOSTJotaro.play();
    */

    this.add.image(150, 150, "Jotaro_icon");
    this.add.image(1770, 150, "Dio_icon");

    Z = this.input.keyboard.addKey("Z");
    Q = this.input.keyboard.addKey("Q");
    S = this.input.keyboard.addKey("S");
    D = this.input.keyboard.addKey("D");
    A = this.input.keyboard.addKey("A");
    E = this.input.keyboard.addKey("E");
    R = this.input.keyboard.addKey("R");
    F = this.input.keyboard.addKey("F");

    O = this.input.keyboard.addKey("O");
    K = this.input.keyboard.addKey("K");
    L = this.input.keyboard.addKey("L");
    M = this.input.keyboard.addKey("M");
    I = this.input.keyboard.addKey("I");
    P = this.input.keyboard.addKey("P");
    U = this.input.keyboard.addKey("U");
    J = this.input.keyboard.addKey("J");

    this.anims.create({
      key: "Anim_Dio_Standing_D",
      frames: this.anims.generateFrameNumbers("Dio_Standing_D", {
        start: 0,
        end: 5
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Standing_G",
      frames: this.anims.generateFrameNumbers("Dio_Standing_G", {
        start: 5,
        end: 0
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Walking_D",
      frames: this.anims.generateFrameNumbers("Dio_Walking_D", {
        start: 0,
        end: 15
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Walking_G",
      frames: this.anims.generateFrameNumbers("Dio_Walking_G", {
        start: 15,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: "Anim_Dio_Air_D",
      frames: this.anims.generateFrameNumbers("Dio_Air_D", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Air_G",
      frames: this.anims.generateFrameNumbers("Dio_Air_G", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Standing_TW_D",
      frames: this.anims.generateFrameNumbers("Dio_Standing_TW_D", {
        start: 0,
        end: 17
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Standing_TW_G",
      frames: this.anims.generateFrameNumbers("Dio_Standing_TW_G", {
        start: 17,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Walking_TW_D",
      frames: this.anims.generateFrameNumbers("Dio_Walking_TW_D", {
        start: 0,
        end: 15
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Walking_TW_G",
      frames: this.anims.generateFrameNumbers("Dio_Walking_TW_G", {
        start: 15,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Barrage_Muda_D",
      frames: this.anims.generateFrameNumbers("Dio_Barrage_Muda_D", {
        start: 0,
        end: 23
      }),
      frameRate: 32,
      repeat: 3
    });
    this.anims.create({
      key: "Anim_Dio_Barrage_Muda_G",
      frames: this.anims.generateFrameNumbers("Dio_Barrage_Muda_G", {
        start: 0,
        end: 23
      }),
      frameRate: 32,
      repeat: 3
    });
    this.anims.create({
      key: "Anim_Dio_Air_TW_D",
      frames: this.anims.generateFrameNumbers("Dio_Air_TW_D", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Air_TW_G",
      frames: this.anims.generateFrameNumbers("Dio_Air_TW_G", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Dio_Muda_D",
      frames: this.anims.generateFrameNumbers("Dio_Muda_D", {
        start: 0,
        end: 11
      }),
      frameRate: 36,
      repeat: 0
    });
    this.anims.create({
      key: "Anim_Dio_Muda_G",
      frames: this.anims.generateFrameNumbers("Dio_Muda_G", {
        start: 11,
        end: 0
      }),
      frameRate: 36,
      repeat: 0
    });

    this.anims.create({
      key: "Anim_Jotaro_Standing_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Standing_D", {
        start: 0,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Standing_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Standing_G", {
        start: 7,
        end: 0
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Walking_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Walking_D", {
        start: 15,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Walking_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Walking_G", {
        start: 0,
        end: 15
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Air_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Air_D", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Air_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Air_G", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Standing_SP_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Standing_SP_D", {
        start: 0,
        end: 13
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Standing_SP_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Standing_SP_G", {
        start: 13,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Walking_SP_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Walking_SP_D", {
        start: 15,
        end: 0
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Walking_SP_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Walking_SP_G", {
        start: 0,
        end: 15
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Barrage_Ora_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Barrage_Ora_D", {
        start: 0,
        end: 23
      }),
      frameRate: 24,
      repeat: 3
    });
    this.anims.create({
      key: "Anim_Jotaro_Barrage_Ora_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Barrage_Ora_G", {
        start: 0,
        end: 23
      }),
      frameRate: 24,
      repeat: 3
    });
    this.anims.create({
      key: "Anim_Jotaro_Air_SP_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Air_SP_D", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Air_SP_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Air_SP_G", {
        start: 0,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.create({
      key: "Anim_Jotaro_Ora_D",
      frames: this.anims.generateFrameNumbers("Jotaro_Ora_D", {
        start: 9,
        end: 0
      }),
      frameRate: 30,
      repeat: 0
    });
    this.anims.create({
      key: "Anim_Jotaro_Ora_G",
      frames: this.anims.generateFrameNumbers("Jotaro_Ora_G", {
        start: 0,
        end: 9
      }),
      frameRate: 30,
      repeat: 0
    });

    Dio = this.physics.add.sprite(900, 700, "Dio_Standing_G");
    Dio.direction = "gauche";
    Dio.setCollideWorldBounds(true);
    Dio.setSize(210, 370);
    Dio.setOffset(0, 0);
    Dio.stand = false;
    Dio.attaque = false;
    Dio.SP = false;
    Dio.Ulti = false;
    Dio.HP = 100;

    Jotaro = this.physics.add.sprite(400, 700, "Jotaro_Standing_D");
    Jotaro.direction = "droite";
    Jotaro.setCollideWorldBounds(true);
    Jotaro.setSize(210, 370);
    Jotaro.setOffset(0, 0);
    Jotaro.stand = false;
    Jotaro.attaque = false;
    Jotaro.SP = false;
    Jotaro.Ulti = false;
    Jotaro.HP = 100;

    this.physics.add.collider(Dio, Groupe_Plateformes);
    this.physics.add.collider(Jotaro, Groupe_Plateformes);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(R)) {
      if (Jotaro.SP) {
        Jotaro.SP = false;
        Dio.SP = false;
      } else {
        Jotaro.SP = true;
        Dio.SP = true;
      }
    }

    if (Jotaro.HP <= 30) {
      Jotaro.Ulti = true;
      Dio.SP = true;
    }
    if (Dio.HP <= 30) {
      Dio.Ulti = true;
      Jotaro.SP = true;
    }

    //// Controles Jotaro
    if (Phaser.Input.Keyboard.JustDown(A)) {
      if (Jotaro.stand) {
        Jotaro.stand = false;
      } else {
        Jotaro.stand = true;
        //SPSound.play();
      }
    }

    if (Z.isDown && Jotaro.body.touching.down) {
      Jotaro.setVelocityY(-1000);
    }

    if (Jotaro.body.touching.down == false) {
      if (D.isDown) {
        Jotaro.setVelocityX(300);
        Jotaro.direction = "droite";
      } else if (Q.isDown) {
        Jotaro.setVelocityX(-300);
        Jotaro.direction = "gauche";
      } else {
        Jotaro.setVelocityX(0);
      }

      if (Jotaro.stand) {
        if (Jotaro.direction == "droite") {
          Jotaro.anims.play("Anim_Jotaro_Air_SP_D", true);
          Jotaro.setSize(210, 370);
        }
        if (Jotaro.direction == "gauche") {
          Jotaro.anims.play("Anim_Jotaro_Air_SP_G", true);
          Jotaro.setSize(210, 370);
        }
      } else {
        if (Jotaro.direction == "droite") {
          Jotaro.anims.play("Anim_Jotaro_Air_D", true);
          Jotaro.setSize(210, 370);
        }
        if (Jotaro.direction == "gauche") {
          Jotaro.anims.play("Anim_Jotaro_Air_G", true);
          Jotaro.setSize(210, 370);
        }
      }
    }

    if (Jotaro.body.touching.down) {
      if (Jotaro.SP) {
        if (E.isDown && Jotaro.stand) {
          //Jotaro.attaque = true;
          Jotaro.setVelocityX(0);
          if (Jotaro.direction == "droite") {
            Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_D", true);
            Jotaro.setSize(210, 370);
          }
          if (Jotaro.direction == "gauche") {
            Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_G", true);
            Jotaro.setSize(210, 370);
          }
        }
      } else {
        if (
          Phaser.Input.Keyboard.JustDown(E) &&
          Jotaro.stand &&
          Jotaro.attaque == false
        ) {
          Jotaro.attaque = true;
          Jotaro.setVelocityX(0);
          var TimerJotaroAttaque = this.time.delayedCall(
            400,
            ChangerJotaroAttaque,
            null,
            this
          );
          if (Jotaro.direction == "droite") {
            Jotaro.anims.play("Anim_Jotaro_Ora_D", true);
            Jotaro.setSize(210, 370);
          }
          if (Jotaro.direction == "gauche") {
            Jotaro.anims.play("Anim_Jotaro_Ora_G", true);
            Jotaro.setSize(210, 370);
          }
        }
      }
      if (
        Phaser.Input.Keyboard.JustDown(E) &&
        Jotaro.stand &&
        Jotaro.attaque == false
      ) {
        Jotaro.attaque = true;
        Jotaro.setVelocityX(0);
        if (Jotaro.SP) {
          if (Jotaro.direction == "droite") {
            Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_D", true);
            Jotaro.setSize(210, 370);
          }
          if (Jotaro.direction == "gauche") {
            Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_G", true);
            Jotaro.setSize(210, 370);
          }
        } else {
          var TimerJotaroAttaque = this.time.delayedCall(
            400,
            ChangerJotaroAttaque,
            null,
            this
          );
          if (Jotaro.direction == "droite") {
            Jotaro.anims.play("Anim_Jotaro_Ora_D", true);
            Jotaro.setSize(210, 370);
          }
          if (Jotaro.direction == "gauche") {
            Jotaro.anims.play("Anim_Jotaro_Ora_G", true);
            Jotaro.setSize(210, 370);
          }
        }
      } else if (D.isDown && Jotaro.attaque == false) {
        Jotaro.setVelocityX(300);
        Jotaro.direction = "droite";
        if (Jotaro.stand) {
          Jotaro.anims.play("Anim_Jotaro_Walking_SP_D", true);
          Jotaro.setSize(210, 370);
        } else {
          Jotaro.anims.play("Anim_Jotaro_Walking_D", true);
          Jotaro.setSize(210, 370);
        }
      } else if (Q.isDown && Jotaro.attaque == false) {
        Jotaro.setVelocityX(-300);
        Jotaro.direction = "gauche";
        if (Jotaro.stand) {
          Jotaro.anims.play("Anim_Jotaro_Walking_SP_G", true);
          Jotaro.setSize(210, 370);
        } else {
          Jotaro.anims.play("Anim_Jotaro_Walking_G", true);
          Jotaro.setSize(210, 370);
        }
      } else if (Jotaro.attaque == false) {
        Jotaro.setVelocityX(0);
        if (Jotaro.direction == "droite") {
          if (Jotaro.stand) {
            Jotaro.anims.play("Anim_Jotaro_Standing_SP_D", true);
            Jotaro.setSize(210, 370);
          } else {
            Jotaro.anims.play("Anim_Jotaro_Standing_D", true);
            Jotaro.setSize(210, 370);
          }
        }
        if (Jotaro.direction == "gauche") {
          if (Jotaro.stand) {
            Jotaro.anims.play("Anim_Jotaro_Standing_SP_G", true);
            Jotaro.setSize(210, 370);
          } else {
            Jotaro.anims.play("Anim_Jotaro_Standing_G", true);
            Jotaro.setSize(210, 370);
          }
        }
      }
    }
    //// Controles Dio
    if (Phaser.Input.Keyboard.JustDown(P)) {
      if (Dio.stand) {
        Dio.stand = false;
      } else {
        Dio.stand = true;
        //TWSound.play();
      }
    }

    if (O.isDown && Dio.body.touching.down) {
      Dio.setVelocityY(-1000);
    }

    if (Dio.body.touching.down == false) {
      if (M.isDown) {
        Dio.setVelocityX(300);
        Dio.direction = "droite";
      } else if (K.isDown) {
        Dio.setVelocityX(-300);
        Dio.direction = "gauche";
      } else {
        Dio.setVelocityX(0);
      }

      if (Dio.stand) {
        if (Dio.direction == "droite") {
          Dio.anims.play("Anim_Dio_Air_TW_D", true);
          Dio.setSize(210, 370);
        }
        if (Dio.direction == "gauche") {
          Dio.anims.play("Anim_Dio_Air_TW_G", true);
          Dio.setSize(210, 370);
        }
      } else {
        if (Dio.direction == "droite") {
          Dio.anims.play("Anim_Dio_Air_D", true);
          Dio.setSize(210, 370);
        }
        if (Dio.direction == "gauche") {
          Dio.anims.play("Anim_Dio_Air_G", true);
          Dio.setSize(210, 370);
        }
      }
    }

    if (Dio.body.touching.down) {
      if (I.isDown && Dio.stand) {
        Dio.setVelocityX(0);
        if (Dio.SP) {
          if (Dio.direction == "droite") {
            Dio.anims.play("Anim_Dio_Barrage_Muda_D", true);
            Dio.setSize(210, 370);
          }
          if (Dio.direction == "gauche") {
            Dio.anims.play("Anim_Dio_Barrage_Muda_G", true);
            Dio.setSize(210, 370);
          }
        } else {
          if (Dio.direction == "droite") {
            Dio.anims.play("Anim_Dio_Muda_D", true);
            Dio.setSize(210, 370);
          }
          if (Dio.direction == "gauche") {
            Dio.anims.play("Anim_Dio_Muda_G", true);
            Dio.setSize(210, 370);
          }
        }
      } else if (M.isDown) {
        Dio.setVelocityX(300);
        Dio.direction = "droite";
        if (Dio.stand) {
          Dio.anims.play("Anim_Dio_Walking_TW_D", true);
          Dio.setSize(210, 370);
        } else {
          Dio.anims.play("Anim_Dio_Walking_D", true);
          Dio.setSize(210, 370);
        }
      } else if (K.isDown) {
        Dio.setVelocityX(-300);
        Dio.direction = "gauche";
        if (Dio.stand) {
          Dio.anims.play("Anim_Dio_Walking_TW_G", true);
          Dio.setSize(210, 370);
        } else {
          Dio.anims.play("Anim_Dio_Walking_G", true);
          Dio.setSize(210, 370);
        }
      } else {
        Dio.setVelocityX(0);
        if (Dio.direction == "droite") {
          if (Dio.stand) {
            Dio.anims.play("Anim_Dio_Standing_TW_D", true);
            Dio.setSize(210, 370);
          } else {
            Dio.anims.play("Anim_Dio_Standing_D", true);
            Dio.setSize(210, 370);
          }
        }
        if (Dio.direction == "gauche") {
          if (Dio.stand) {
            Dio.anims.play("Anim_Dio_Standing_TW_G", true);
            Dio.setSize(210, 370);
          } else {
            Dio.anims.play("Anim_Dio_Standing_G", true);
            Dio.setSize(210, 370);
          }
        }
      }
    }
  }
}

function ChangerJotaroAttaque() {
  Jotaro.attaque = false;
}
