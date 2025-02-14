import { useEffect, useState } from "react";
import { api } from "../api";

interface Film {
  image_url: string;
  title: string;
  subtitle: string;
  type: string;
  description?: string;
}

export function useGetData() {
  async function getFilms(): Promise<Film[] | null> {
    try {
      const { data } = await api.get<Film[]>("/films");
      return data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return null;
    }
  }

  async function getPersonage(): Promise<Film[] | null> {
    try {
      const { data } = await api.get<Film[]>("/personage");
      return data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return null;
    }
  }

  return { getFilms, getPersonage };
}
