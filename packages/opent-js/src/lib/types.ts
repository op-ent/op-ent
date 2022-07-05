export type OpentClientOptions = {};

export type BaseClientParams = {
  baseUrl: string;
  accessId: string;
  accessToken?: string;
};

export type OpentClientParams = BaseClientParams & {
  options?: OpentClientOptions;
};

export type AuthClientParams = BaseClientParams & {};

export type Headers = {
  [key: string]: string;
};
