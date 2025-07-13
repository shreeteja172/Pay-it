const express = require('express');
const mainRouter = require("./routes/index");
const cors = require('cors')
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());

app.use(cors());
app.use("/api/v1/user", userRouter);
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log("Server is running on 3000");
});