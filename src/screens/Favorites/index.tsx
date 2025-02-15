import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/atoms/Logo";
import { useFavorites } from "../../services/hooks/useFavorites";
import { useNavigation } from "@react-navigation/native";
import { GreedList } from "../../components/organisms/GreedList";

export function Favorites() {
  const [favoriteList, setFavoriteList] = useState([])

  const navigation = useNavigation();

  const { getFavorites } = useFavorites();

  async function callGetFavorites() {
    const favorites = await getFavorites();
    setFavoriteList(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      callGetFavorites();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo style={styles.logo} />
        <Text style={styles.favoriteText}>Favoritos</Text>
      </View>

      <GreedList
          type="favorites"
          data={favoriteList}
        />
    </View>
  );
}
