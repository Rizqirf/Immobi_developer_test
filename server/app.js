const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 4000;
const router = require("./routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
