import AsyncStorage from "@react-native-async-storage/async-storage";

const DB_KEY = "@NarutoWiki:Favorites";

export function useFavorites() {
  async function addFavorites(data) {
    try {
      const value = await AsyncStorage.getItem(DB_KEY);
      let newDB = [];

      if (value) {
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

      if (value) {
        return JSON.parse(value);
      }

      return [];
    } catch (error) {
      console.error("Erro ao recuperar favoritos:", error);
      return [];
    }
  }

  return {
    addFavorites,
    getFavorites,
  };
}
