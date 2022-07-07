import Client from "./request";
import AuthResource from "./resources/auth";
export default class OpentClient {
    constructor(config) {
        this.client = new Client(config);
        this.auth = new AuthResource(this.client);
    }
}
//# sourceMappingURL=opentClient.js.map