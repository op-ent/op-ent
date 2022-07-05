import axios, { AxiosInstance } from "axios";
import { BaseClientParams, Headers } from "./types";

export const stripTrailingSlash = (url: string): string =>
  url.replace(/\/$/, "");

export class BaseClient<T extends BaseClientParams> {
  protected readonly baseUrl: string;
  protected readonly accessId: string;
  protected readonly accessToken?: string;

  protected readonly axios: AxiosInstance;

  constructor(params: T & { urlTransformer: (url: string) => string }) {
    const { baseUrl, accessId, accessToken, urlTransformer } = params;
    this.baseUrl = urlTransformer(baseUrl);
    this.accessId = accessId;
    this.accessToken = accessToken;

    const DEFAULT_HEADERS: Headers = {
      "access-id": this.accessId,
    };
    if (this.accessToken) {
      DEFAULT_HEADERS["access-token"] = this.accessToken;
    }

    const instance = axios.create({
      baseURL: this.baseUrl,
      headers: DEFAULT_HEADERS,
    });

    this.axios = instance;
  }
}
