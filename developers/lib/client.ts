import { createClient } from "opent-js";

const client = createClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/",
  accessId: process.env.NEXT_PUBLIC_ACCESS_ID || "",
});

export default client;
