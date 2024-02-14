import axios from "axios";

const BASE_URL = "https://api.disneyapi.dev/character";

export const getAllData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
