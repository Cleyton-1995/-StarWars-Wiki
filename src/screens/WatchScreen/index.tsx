import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { styles } from "./styles";
import { useGetData } from "../../services/hooks/useGetData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { theme } from "../../themes";
import { Logo } from "../../components/atoms/Logo";

export function WatchScreen() {
  const { getFilms } = useGetData();
  const route = useRoute();
  const { filmId } = route.params;

  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  async function callGetData() {
    setLoading(true); // Ativa o carregamento
    const filmsResponse = await getFilms();

    if (!filmsResponse.error) {
      const selectedFilm = filmsResponse.find((film) => film.id === filmId);
      setFilm(selectedFilm);
    }
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      callGetData();
    }, 500);
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.dark,
        }}
      >
        <ActivityIndicator size="large" color="#E60C0D" />
      </View>
    );
  }

  const navigation = useNavigation();

  function onBack() {
    navigation.navigate("DatailScreen");
  }

  return (
    <View style={styles.container}>
      <Logo
        style={styles.icon}
        image={false}
        icon="chevron-back"
        library="Ionicons"
        iconColor={theme.colors.white}
        onPress={onBack}
      />

      {film && (
        <YoutubeIframe
          height={300}
          width="100%"
          videoId={film.video}
          play={false}
          onReady={() => console.log("Player is ready")}
          onChangeState={(state) => console.log("Player state:", state)}
        />
      )}
    </View>
  );
}
