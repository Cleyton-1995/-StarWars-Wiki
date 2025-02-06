import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />

      <Text style={styles.title}> StarWars-Wiki</Text>
    </View>
  );
}
