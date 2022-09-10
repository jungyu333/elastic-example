const { Client } = require("@elastic/elasticsearch");

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

client.search(
  {
    index: "kibana_sample_data_ecommerce", //elastic의 index명 (index에 product가 없다면 결과값이 나오지 않음)
    body: {
      query: {
        match: {
          customer_full_name: "Eddie Benson",
        },
      },
    },
  },
  (err, result) => {
    if (err) console.log(err);
    console.log(result);
  }
);
