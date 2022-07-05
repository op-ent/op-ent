import { OpentClientOpts } from "./lib/types";
import OpentClient from "./OpentClient";

export * from "./lib/types";

const createClient = (opts: OpentClientOpts) => {
  return new OpentClient(opts);
};

export { createClient, OpentClient };
