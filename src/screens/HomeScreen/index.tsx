import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";
import { FakeDataCharacteresFilms } from "../../services/seedsFilms";
import { FakeDataCharacteresPersons } from "../../services/seedsPersons";
import { useGetData } from "../../services/hooks/useGetData";
export function HomeScreen() {
  const { getFilms, getPersonage } = useGetData();

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [personage, setPersonage] = useState([]);

  console.log(loading, personage, films);

  async function callGetData() {
    const filmsResponse = await getFilms();
    const personageResponse = await getPersonage();

    if (!filmsResponse.error && !personageResponse.error) {
      setFilms(filmsResponse);
      setPersonage(personageResponse);
      setLoading(false);
    }
  }

  useEffect(() => {
    callGetData();
  }, []);

  if (loading) {
    return (
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <ActivityIndicator size="large" color="#E60C0D" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Hero item={films[2]} />
      <HomeList title="Filmes e Séries" data={films} />
      <HomeList title="Personagens" data={personage} />
    </ScrollView>
  );
}
