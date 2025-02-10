import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";
import { FakeDataCharacteres } from "../../services/seeds";
export function HomeScreen() {
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
      <HomeList title="Filmes e Séries" data={FakeDataCharacteres} />
      <HomeList title="Personagens" data={FakeDataCharacteres} />
    </ScrollView>
  );
}
