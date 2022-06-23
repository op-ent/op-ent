import { $fetch, FetchOptions } from "ohmyfetch";
import { defu } from "defu";

class Client {
  private readonly baseUrl: string =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/";
  private readonly defaults = {
    headers: {
      "access-id": process.env.NEXT_PUBLIC_ACCESS_ID || "",
    },
  };

  private fetch<T>(url: string, options?: FetchOptions<"json">) {
    const _url = `${this.baseUrl}${url}`;
    const _options: FetchOptions<"json"> = defu(options || {}, this.defaults);
    return $fetch<T>(_url, _options);
  }

  public async getConsumers() {
    return this.fetch("developers/app-consumers");
  }

  public async test() {
    return this.fetch<{ hello: string }>("test");
  }
}

const client = new Client();

export default client;
