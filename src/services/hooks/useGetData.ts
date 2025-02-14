import { api } from "../api";

export function useGetData() {
  async function getFilms() {
    try {
      const { data } = await api.get("/films");
      return data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return null;
    }
  }

  async function getPersonage(){
    try {
      const { data } = await api.get("/personage");
      return data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return null;
    }
  }

  return { getFilms, getPersonage };
}
