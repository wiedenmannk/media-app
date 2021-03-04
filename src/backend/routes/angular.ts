import express from "express";
import { log } from "../../common/functions/log";
import { config } from "../../model/config";

const path = require("path");
const router = express.Router();

const ngPath = config.path.angular;
const indexFile = path.join(ngPath, "index.html");

log("angular File", indexFile);

/* GET users listing. */
router.get("*", function (req, res, next) {
  res.sendFile(indexFile);
});

module.exports = router;