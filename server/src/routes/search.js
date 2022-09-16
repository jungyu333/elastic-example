import express from "express";
import client from "../connection.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await client.search({
      index: "kibana_sample_data_ecommerce",
      body: {
        query: {
          match_all: {},
        },
      },
    });
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
