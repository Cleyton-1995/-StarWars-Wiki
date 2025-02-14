import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.100.34:3000/api", // Ajuste para a URL correta
});
