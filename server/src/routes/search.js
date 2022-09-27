import express from "express";
import client from "../connection.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { movieId } = req.query;

    const result = await client.search({
      index: "movie_test",
      body: {
        query: {
          match: {
            movie_id: movieId,
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

router.post("/", async (req, res, next) => {
  try {
    const { search } = req.body;

    const result = await client.search({
      index: "movie_test",

      body: {
        query: {
          match: {
            h_movie: search,
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

router.get("/", async (req, res, next) => {
  try {
    console.log(req.query.actor);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
