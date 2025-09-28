/*
update() {
  if (E.isUp) {
    Jotaro.attaque = false;
  }
  if (P.isUp) {
    Dio.attaque = false;
  }
  if (E.isDown && Jotaro.stand == true && Jotaro.body.touching.down == true) {
    Jotaro.setVelocityX(0);
    Jotaro.attaque = true;
    if (Jotaro.direction == "droite") {
      Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_D", true);
      Jotaro.setSize(210, 370);
    }
    if (Jotaro.direction == "gauche") {
      Jotaro.anims.play("Anim_Jotaro_Barrage_Ora_G", true);
      Jotaro.setSize(210, 370);
    }
  }
  if (P.isDown && Dio.stand == true && Dio.body.touching.down == true) {
    Dio.setVelocityX(0);
    Dio.attaque = true;
    if (Dio.direction == "droite") {
      Dio.anims.play("Anim_Dio_Barrage_Muda_D", true);
      Dio.setSize(210, 370);
    }
    if (Dio.direction == "gauche") {
      Dio.anims.play("Anim_Dio_Barrage_Muda_G", true);
      Dio.setSize(210, 370);
    }
  }

  if (Phaser.Input.Keyboard.JustDown(A)) {
    if (Jotaro.stand == true) {
      Jotaro.stand = false;
    } else if (Jotaro.stand == false) {
      Jotaro.stand = true;
    }
  }
  if (Phaser.Input.Keyboard.JustDown(I)) {
    if (Dio.stand == true) {
      Dio.stand = false;
    } else if (Dio.stand == false) {
      Dio.stand = true;
    }
  }

  if (Dio.body.touching.down == false && Dio.stand == false) {
    if (K.isDown) {
      Dio.direction = "gauche";
      Dio.anims.play("Anim_Dio_Air_G", true);
      Dio.setSize(210, 370);
      Dio.setVelocityX(-200);
    } else if (M.isDown) {
      Dio.direction = "droite";
      Dio.anims.play("Anim_Dio_Air_D", true);
      Dio.setSize(210, 370);
      Dio.setVelocityX(200);
    } else {
      Dio.setVelocityX(0);
      if (Dio.direction == "gauche") {
        Dio.anims.play("Anim_Dio_Air_G", true);
        Dio.setSize(210, 370);
      } else if (Dio.direction == "droite") {
        Dio.anims.play("Anim_Dio_Air_D", true);
        Dio.setSize(210, 370);
      }
    }
  } else if (Dio.body.touching.down == false && Dio.stand == true) {
    if (K.isDown) {
      Dio.direction = "gauche";
      Dio.anims.play("Anim_Dio_Air_TW_G", true);
      Dio.setSize(210, 370);
      Dio.setVelocityX(-200);
    } else if (M.isDown) {
      Dio.direction = "droite";
      Dio.anims.play("Anim_Dio_Air_TW_D", true);
      Dio.setSize(210, 370);
      Dio.setVelocityX(200);
    } else {
      Dio.setVelocityX(0);
      if (Dio.direction == "gauche") {
        Dio.anims.play("Anim_Dio_Air_TW_G", true);
        Dio.setSize(210, 370);
      } else if (Dio.direction == "droite") {
        Dio.anims.play("Anim_Dio_Air_TW_D", true);
        Dio.setSize(210, 370);
      }
    }
  } else if (K.isDown && Dio.stand == false && Dio.attaque == false) {
    Dio.direction = "gauche";
    Dio.setVelocityX(-200);
    Dio.anims.play("Anim_Dio_Walking_G", true);
    Dio.setSize(210, 370);
  } else if (M.isDown && Dio.stand == false && Dio.attaque == false) {
    Dio.direction = "droite";
    Dio.setVelocityX(200);
    Dio.anims.play("Anim_Dio_Walking_D", true);
    Dio.setSize(210, 370);
  } else if (K.isDown && Dio.stand == true && Dio.attaque == false) {
    Dio.direction = "gauche";
    Dio.setVelocityX(-200);
    Dio.anims.play("Anim_Dio_Walking_TW_G", true);
    Dio.setSize(210, 370);
  } else if (M.isDown && Dio.stand == true && Dio.attaque == false) {
    Dio.direction = "droite";
    Dio.setVelocityX(200);
    Dio.anims.play("Anim_Dio_Walking_TW_D", true);
    Dio.setSize(210, 370);
  } else if (Dio.attaque == false) {
    Dio.setVelocityX(0);
    if (Dio.direction == "droite" && Dio.stand == false) {
      Dio.anims.play("Anim_Dio_Standing_D", true);
      Dio.setSize(210, 370);
    }
    if (Dio.direction == "gauche" && Dio.stand == false) {
      Dio.anims.play("Anim_Dio_Standing_G", true);
      Dio.setSize(210, 370);
    }
    if (Dio.direction == "droite" && Dio.stand == true) {
      Dio.anims.play("Anim_Dio_Standing_TW_D", true);
      Dio.setSize(210, 370);
    }
    if (Dio.direction == "gauche" && Dio.stand == true) {
      Dio.anims.play("Anim_Dio_Standing_TW_G", true);
      Dio.setSize(210, 370);
    }
  }
  if (O.isDown && Dio.body.touching.down && Dio.attaque == false) {
    Dio.setVelocityY(-1000);
  }

  if (Jotaro.body.touching.down == false && Jotaro.stand == false) {
    if (Q.isDown) {
      Jotaro.direction = "gauche";
      Jotaro.anims.play("Anim_Jotaro_Air_G", true);
      Jotaro.setSize(210, 370);
      Jotaro.setVelocityX(-200);
    } else if (D.isDown) {
      Jotaro.direction = "droite";
      Jotaro.anims.play("Anim_Jotaro_Air_D", true);
      Jotaro.setSize(210, 370);
      Jotaro.setVelocityX(200);
    } else {
      Jotaro.setVelocityX(0);
      if (Jotaro.direction == "gauche") {
        Jotaro.anims.play("Anim_Jotaro_Air_G", true);
        Jotaro.setSize(210, 370);
      } else if (Jotaro.direction == "droite") {
        Jotaro.anims.play("Anim_Jotaro_Air_D", true);
        Jotaro.setSize(210, 370);
      }
    }
  } else if (Jotaro.body.touching.down == false && Jotaro.stand == true) {
    if (Q.isDown) {
      Jotaro.direction = "gauche";
      Jotaro.anims.play("Anim_Jotaro_Air_SP_G", true);
      Jotaro.setSize(210, 370);
      Jotaro.setVelocityX(-200);
    } else if (D.isDown) {
      Jotaro.direction = "droite";
      Jotaro.anims.play("Anim_Jotaro_Air_SP_D", true);
      Jotaro.setSize(210, 370);
      Jotaro.setVelocityX(200);
    } else {
      Jotaro.setVelocityX(0);
      if (Jotaro.direction == "gauche") {
        Jotaro.anims.play("Anim_Jotaro_Air_SP_G", true);
        Jotaro.setSize(210, 370);
      } else if (Jotaro.direction == "droite") {
        Jotaro.anims.play("Anim_Jotaro_Air_SP_D", true);
        Jotaro.setSize(210, 370);
      }
    }
  } else if (Q.isDown && Jotaro.stand == false && Jotaro.attaque == false) {
    Jotaro.direction = "gauche";
    Jotaro.setVelocityX(-200);
    Jotaro.anims.play("Anim_Jotaro_Walking_G", true);
    Jotaro.setSize(210, 370);
  } else if (D.isDown && Jotaro.stand == false && Jotaro.attaque == false) {
    Jotaro.direction = "droite";
    Jotaro.setVelocityX(200);
    Jotaro.anims.play("Anim_Jotaro_Walking_D", true);
    Jotaro.setSize(210, 370);
  } else if (Q.isDown && Jotaro.stand == true && Jotaro.attaque == false) {
    Jotaro.direction = "gauche";
    Jotaro.setVelocityX(-200);
    Jotaro.anims.play("Anim_Jotaro_Walking_SP_G", true);
    Jotaro.setSize(210, 370);
  } else if (D.isDown && Jotaro.stand == true && Jotaro.attaque == false) {
    Jotaro.direction = "droite";
    Jotaro.setVelocityX(200);
    Jotaro.anims.play("Anim_Jotaro_Walking_SP_D", true);
    Jotaro.setSize(210, 370);
  } else if (Jotaro.attaque == false) {
    Jotaro.setVelocityX(0);
    if (Jotaro.direction == "droite" && Jotaro.stand == false) {
      Jotaro.anims.play("Anim_Jotaro_Standing_D", true);
      Jotaro.setSize(210, 370);
    }
    if (Jotaro.direction == "gauche" && Jotaro.stand == false) {
      Jotaro.anims.play("Anim_Jotaro_Standing_G", true);
      Jotaro.setSize(210, 370);
    }
    if (Jotaro.direction == "droite" && Jotaro.stand == true) {
      Jotaro.anims.play("Anim_Jotaro_Standing_SP_D", true);
      Jotaro.setSize(210, 370);
    }
    if (Jotaro.direction == "gauche" && Jotaro.stand == true) {
      Jotaro.anims.play("Anim_Jotaro_Standing_SP_G", true);
      Jotaro.setSize(210, 370);
    }
  }
  if (Z.isDown && Jotaro.body.touching.down && Jotaro.attaque == false) {
    Jotaro.setVelocityY(-1000);
  }
}
*/
