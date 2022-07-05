import { OpentClientOptions, OpentClientOpts } from "./lib/types";
import { $fetch, FetchOptions } from "ohmyfetch";
import { defu } from "defu";

export default class OpentClient {
  protected readonly baseUrl: string;
  protected readonly accessId: string;
  protected readonly accessToken?: string;
  protected readonly options: OpentClientOptions;

  protected DEFAULT_OPTIONS: OpentClientOptions = {};

  protected fetch<T>(url: string, options?: FetchOptions<"json">) {
    const _url = `${this.baseUrl}${url}`;

    const DEFAULT_HEADERS: {
      [key: string]: string;
    } = {
      "access-id": this.accessId,
    };

    if (this.accessToken) {
      DEFAULT_HEADERS["access-token"] = this.accessToken;
    }

    const _options: FetchOptions<"json"> = defu(options || {}, {
      headers: DEFAULT_HEADERS,
    });
    return $fetch<T>(_url, _options);
  }

  constructor(opts: OpentClientOpts) {
    const { baseUrl, accessId, accessToken, options } = opts;
    this.baseUrl = baseUrl;
    this.accessId = accessId;
    this.accessToken = accessToken;
    this.options = options || this.DEFAULT_OPTIONS;
  }

  public async getConsumers() {
    return this.fetch("developers/app-consumers");
  }

  public async test() {
    return this.fetch<{ hello: string }>("test");
  }
}
