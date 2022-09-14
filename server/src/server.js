import express from "express";
import searchRouter from "./routes/search.js";
import { Client } from "@elastic/elasticsearch";
import cors from "cors";

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/search", searchRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(port, () => {
  console.log(`server is open on port ${port}!`);
});
