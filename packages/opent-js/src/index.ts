import OpentClient from "./opentClient";
import { Config } from "./types";

export * from "./types";

const createClient = (config: Config) => new OpentClient(config);

export { createClient, OpentClient };
