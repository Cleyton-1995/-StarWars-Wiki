import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { HomeList } from "../../components/organisms/HomeList";
import { Hero } from "../../components/organisms/Hero";
import { useGetData } from "../../services/hooks/useGetData";
import { theme } from "../../themes";
export function HomeScreen() {
  const { getFilms, getPersonage } = useGetData();

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [personage, setPersonage] = useState([]);

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
      <View style={{flex: 1,alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.dark}}>
        <ActivityIndicator size="large" color="#E60C0D" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Hero item={films[2]} hideInfoButton={false} />
      <HomeList title="Filmes e Séries" data={films} />
      <HomeList title="Personagens" data={personage} />
    </ScrollView>
  );
}
