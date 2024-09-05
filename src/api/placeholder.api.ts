import { ROWS_PER_PAGE } from "@/constant/placeholder";
import { Post } from "@/hooks/usePlaceHolderQuery";
import axios, { AxiosResponse } from "axios";

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const BASE_URL = import.meta.env.VITE_JSON_PLACE_HOLDER as string;
class PlaceholderAPI {
  #baseUrl = BASE_URL;
  #client;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseUrl });
  }
  async fetchPosts(
    page: number,
    limit: number = ROWS_PER_PAGE
  ): Promise<Post[]> {
    const response = await this.#client.get<Post[]>("/photos", {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  }
  async fetchPost(id: number): Promise<AxiosResponse<Post>> {
    const response = await this.#client.get(`/photos/${id}`);
    return response;
  }
  async fetchPostComments(id: number): Promise<AxiosResponse<CommentType[]>> {
    const response = await this.#client.get(`/posts/${id}/comments`);
    return response;
  }
}
export const placeholderApi = new PlaceholderAPI();
