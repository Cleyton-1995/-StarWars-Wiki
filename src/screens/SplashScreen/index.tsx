import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { CustomText } from "../../components/atoms/Text";
import { Logo } from "../../components/atoms/Logo";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <CustomText style={styles.title} label=" StarWars-Wiki" />
    </View>
  );
}
