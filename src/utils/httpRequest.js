import axios from "axios";

const tmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3", //APIendpoint
});

export default tmdbAPI;
