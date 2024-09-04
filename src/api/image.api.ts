import axios from "axios";

const BASE_URL = import.meta.env.VITE_IMG_URL as string;
class ImageAPI {
  #baseUrl = BASE_URL;
  #client;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseUrl });
  }
  async fetchRandomImages(
    count: number,
    size: {
      width: number;
      height: number;
    }
  ): Promise<string[]> {
    const requests = new Array(count).fill(0).map(() => {
      return this.#client.get(`/${size.width}/${size.height}`, {
        responseType: "arraybuffer", // 이미지 데이터를 배열 버퍼로 받음
      });
    });
    const response = await axios.all(requests);
    return response.map((value) => value.request.responseURL);
  }
}
export const imagesApi = new ImageAPI();
