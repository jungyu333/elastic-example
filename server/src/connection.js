import { Client } from "@elastic/elasticsearch";

const client = new Client({
  host: "http://localhost:9200",
  node: "http://localhost:9200",
  log: "trace",
});

export default client;
