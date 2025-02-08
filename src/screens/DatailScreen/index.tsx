import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Hero } from "../../components/organisms/Hero";
export function DatailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Hero
        item={{
          image_url:
            "https://e1.pxfuel.com/desktop-wallpaper/804/696/desktop-wallpaper-best-naruto-group.jpg",
          title: "Epsódio I",
          subtitle: "Voltando para Casa",
          type: "Filme",
        }}
      />
    </ScrollView>
  );
}
