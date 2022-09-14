import express from "express";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
