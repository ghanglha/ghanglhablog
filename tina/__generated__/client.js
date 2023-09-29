import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b77775cfc4609cb7c3ec4333c06fc65545f70c63', queries });
export default client;
  