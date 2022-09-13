import express from "express";
import searchRouter from "./routes/search.js";
import { Client } from "@elastic/elasticsearch";

const app = express();
const port = 4000;

const client = new Client({
  node: "http://localhost:9200",
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: true,
});

async function bootstrap() {
  try {
    client.ping();
    console.log("9200번 포트 연결");
  } catch (e) {
    console.log(e);
  }
}

bootstrap();

app.use("/api/search", searchRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(port, () => {
  console.log(`server is open on port ${port}!`);
});
