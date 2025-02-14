import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";
import { FakeDataCharacteresFilms } from "../../services/seedsFilms";
import { FakeDataCharacteresPersons } from "../../services/seedsPersons";
import { useGetData } from "../../services/hooks/useGetData";
export function HomeScreen() {
  const { getFilms } = useGetData();

  async function callGetFilmes() {
    const response = await getFilms();
  }

  useEffect(() => {
    callGetFilmes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Hero
        item={{
          image_url:
            "https://e1.pxfuel.com/desktop-wallpaper/804/696/desktop-wallpaper-best-naruto-group.jpg",
          title: "Naruto o Filme",
          subtitle: "O confronto Ninja no País da Neve",
          type: "Filme",
        }}
      />
      <HomeList title="Filmes e Séries" data={FakeDataCharacteresFilms} />
      <HomeList title="Personagens" data={FakeDataCharacteresPersons} />
    </ScrollView>
  );
}
