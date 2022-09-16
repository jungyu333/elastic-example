import express from "express";
import client from "../connection.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { search } = req.body;
    const result = await client.search({
      index: "kibana_sample_data_ecommerce",
      body: {
        query: {
          match: {
            customer_full_name: search,
          },
        },
      },
    });
    res.status(200).json(result.body.hits);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
