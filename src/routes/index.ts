import express from "express";
import routes from "../routes/v1";
const router = express.Router();

router.use("/api/v1", routes);

router.get("/", (req, res, next) => {
    res
        .status(200)
        .json({ success: true, message: "root route here" });
});

export default router;