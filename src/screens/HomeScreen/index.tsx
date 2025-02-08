import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/molecules/Card";
import { Container } from "../../components/atoms/Container";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";

const FakeDataCharacteres = [
  {
    id: 0,
    image_url:
      "https://play-lh.googleusercontent.com/3uBdCYP7gT8Uvnqqdvdxa3shr4anQBw4t_rsebsmJvl6XuQvBpv7TJpsOuoUk8OgeaY",
  },
  {
    id: 1,
    image_url:
      "https://m.media-amazon.com/images/S/pv-target-images/1de9f16753abc812b432627a10dc66f48428cf0c5165c66dc3c73c97870a43fc.jpg",
  },
];
export function HomeScreen() {
  return (
    <Container style={styles.container}>
      <Hero />
      <HomeList title="Filmes" data={FakeDataCharacteres} />
      <HomeList title="Personagens" data={FakeDataCharacteres} />
    </Container>
  );
}
