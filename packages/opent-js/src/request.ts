import axios, { AxiosError, AxiosInstance } from "axios";
import {
  ClientRequestError,
  ClientRequestResponse,
  Config,
  RequestMethod,
} from "./types";
import { stripTrailingSlash } from "./utils";

const DEFAULT_CONFIG: Config = {
  baseUrl: "https://op-ent.fr/",
  accessId: "",
};

export default class Client {
  private axiosClient: AxiosInstance;
  private config: Config;

  constructor(config: Config) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.config.baseUrl = `${stripTrailingSlash(this.config.baseUrl)}/api`;
    this.axiosClient = this.createClient(this.config);
  }

  private createClient(config: Config): AxiosInstance {
    const client = axios.create({
      baseURL: config.baseUrl,
    });

    return client;
  }

  public async request<T>(
    method: RequestMethod,
    path: string,
    payload: Record<string, any> | null = null,
    customHeaders: Record<string, any> = {}
  ): Promise<{
    data?: T;
    response?: ClientRequestResponse;
    error?: ClientRequestError;
  }> {
    if (method === "POST" && !payload) {
      payload = {};
    }

    const DEFAULT_HEADERS: Record<string, any> = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-id": this.config.accessId,
    };

    if (this.config.accessToken) {
      DEFAULT_HEADERS["access-token"] = this.config.accessToken;
    }

    const headers: Record<string, any> = {
      ...DEFAULT_HEADERS,
      ...customHeaders,
    };

    const reqOpts = {
      method,
      url: path,
      data: payload,
      json: true,
      headers,
    };

    let data: T | undefined = undefined;
    let response: ClientRequestResponse | undefined = undefined;
    let error: ClientRequestError | undefined = undefined;

    try {
      ({ data, ...response } = await this.axiosClient.request<T>(reqOpts));
    } catch (e: any) {
      const _e: AxiosError = e;
      error = {
        status: _e.response!.status,
        statusText: _e.response!.statusText,
        data: _e.response!.data,
      };
    }
    return { data, response, error };
  }
}
