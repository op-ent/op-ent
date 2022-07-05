import { OpentClientParams } from "./lib/types";
import OpentClient from "./OpentClient";

export * from "./lib/types";

const createClient = (params: OpentClientParams) => {
  return new OpentClient(params);
};

export { createClient, OpentClient };