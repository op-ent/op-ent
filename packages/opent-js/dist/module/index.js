import OpentClient from "./OpentClient";
export * from "./lib/types";
const createClient = (params) => {
    return new OpentClient(params);
};
export { createClient, OpentClient };
//# sourceMappingURL=index.js.map