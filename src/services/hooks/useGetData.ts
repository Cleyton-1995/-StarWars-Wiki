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

  async function getPersonage() {
    try {
      const { data } = await api.get("/personage");
      return data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return null;
    }
  }

  async function getSearch(query) {
    try {
      const searchQuery = query.trim().toLowerCase();
      if (!searchQuery) return [];
  
      const [filmsResponse, personageResponse] = await Promise.all([
        api.get("/films"),
        api.get("/personage"),
      ]);
  
      const films = filmsResponse.data || [];
      const personages = personageResponse.data || [];
  
      const filteredFilms = films.filter((film) =>
        film.subtitle.toLowerCase().includes(searchQuery)
      );
  
      const filteredPersonages = personages.filter((personage) =>
        personage.title.toLowerCase().includes(searchQuery)
      );
  
      return [...filteredFilms, ...filteredPersonages];
    } catch (error) {
      console.error("Erro ao buscar filmes e personagens:", error);
      return [];
    }
  }

  return { getFilms, getPersonage, getSearch };
}
