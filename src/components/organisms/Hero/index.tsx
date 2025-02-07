import React from "react";
import { ImageBackground, View } from "react-native";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../themes/colors";
import { Logo } from "../../atoms/Logo";
import { CustomText } from "../../atoms/Text";

export function Hero() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.ImageBackground]}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg/250px-Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",
        }}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[colors.dark, "transparent", colors.dark]}
        >
          <Logo style={styles.logo} />
          <CustomText style={styles.labelTitle} label="Epsódio I" />
          <CustomText style={styles.labelSubtitle} label="Ameaça Fantasma" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
