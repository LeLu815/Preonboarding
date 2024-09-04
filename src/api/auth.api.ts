import { AxiosInstance, AxiosResponse } from "axios";

export interface LoginParams {
  id: string;
  password: string;
}

export interface JoinParams {
  id: string;
  password: string;
  nickname: string;
}

export interface UserInfoResponse {
  // 사용자 정보의 구조를 정의합니다.
  id: string;
  nickname: string;
  // 필요한 다른 필드 추가
}

export interface PatchUserParams {
  avatar: File | null;
  nickname: string;
}

class AuthApi {
  #client: AxiosInstance;
  #accessToken: string | null;
  constructor(client: AxiosInstance) {
    this.#client = client;
    // 인터셉터 설정
    this.#client.interceptors.request.use((config) => {
      if (this.#accessToken) {
        config.headers.Authorization = `Bearer ${this.#accessToken}`;
      }
      return config;
    });
  }
  updateToken(token: string): void {
    this.#accessToken = token;
  }

  async login({ id, password }: LoginParams): Promise<AxiosResponse> {
    const response = await this.#client.post("/login", {
      id,
      password,
    });
    this.#accessToken = response.data.accessToken;
    return response;
  }

  logout(): void {
    this.#accessToken = null;
    localStorage.clear();
  }

  async join({ id, password, nickname }: JoinParams): Promise<AxiosResponse> {
    const response = await this.#client.post("/register", {
      id,
      password,
      nickname,
    });
    return response;
  }

  async getUserInfo(): Promise<AxiosResponse<UserInfoResponse>> {
    const response = await this.#client.get<UserInfoResponse>("/user", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  async patchUserInfo({ avatar, nickname }: PatchUserParams) {
    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("nickname", nickname);
    const response = await this.#client.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }
}

export default AuthApi;
