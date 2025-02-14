import AsyncStorage from "@react-native-async-storage/async-storage";

const DB_KEY = "@NarutoWiki:Favorites";

export function useFavorites() {
  async function addFavorites(data) {
    try {
      const value = await AsyncStorage.getItem(DB_KEY);
      let newDB = [];

      if (value !== null) {
        const db = JSON.parse(value);
        newDB = [...db, data];
      } else {
        newDB = [data];
      }

      await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDB));
      return newDB;
    } catch (error) {
      console.error("Erro ao salvar favorito:", error);
      return null;
    }
  }

  async function getFavorites() {
    try {
      const value = await AsyncStorage.getItem(DB_KEY);

      if (value !== null) {
        return JSON.parse(value);
      }

      return [];
    } catch (error) {
      console.error("Erro ao recuperar favoritos:", error);
      return [];
    }
  }

  async function removeFavorite(data) {
    try {
      const value = await AsyncStorage.getItem(DB_KEY);

      if (!value) return [];

      const favorites = JSON.parse(value);

      const updatedFavorites = favorites.filter(
        (item) => item.title !== data.title && item.id !== data.id
      );

      await AsyncStorage.setItem(DB_KEY, JSON.stringify(updatedFavorites));

      return updatedFavorites;
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
      return null;
    }
  }
  return {
    addFavorites,
    getFavorites,
    removeFavorite,
  };
}
