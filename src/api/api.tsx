import axios from "axios";
import AuthApi from "./auth.api";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;
class API {
  #baseUrl = BASE_URL;
  #client;
  auth: AuthApi;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseUrl });
    this.auth = new AuthApi(this.#client);
  }
}

const api = new API();
export default api;
