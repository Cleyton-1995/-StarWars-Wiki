import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/atoms/Logo";
import { useFavorites } from "../../services/hooks/useFavorites";
import { useNavigation } from "@react-navigation/native";

export function Favorites() {
  const navigation = useNavigation();

  const { getFavorites } = useFavorites();

  async function callGetFavorites() {
    const favorites = await getFavorites();
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
    </View>
  );
}
