import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { styles } from "./styles";
import { useGetData } from "../../services/hooks/useGetData";
import { useRoute } from "@react-navigation/native";


export function WatchScreen() {
  const { getFilms } = useGetData();
  const route = useRoute();
  const { filmId } = route.params; 

  const [film, setFilm] = useState(null);

  async function callGetData() {
    const filmsResponse = await getFilms();

    if (!filmsResponse.error) {
      const selectedFilm = filmsResponse.find((film) => film.id === filmId);
      setFilm(selectedFilm);
    }
  }

  useEffect(() => {
    callGetData();
  }, []);

  if (!film) {
    return <View><Text>Carregando...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <YoutubeIframe
        height={300}
        width={"100%"}
        videoId={film.video}
        play={false}
        onReady={() => console.log("Player is ready")}
        onChangeState={(state) => console.log("Player state:", state)}
      />
    </View>
  );
}