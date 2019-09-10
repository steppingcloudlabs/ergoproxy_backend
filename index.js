const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.get("/api/v1/", (req, res, next) => {
    res.send({
        code: 200,
        message: "Faad chal rha hai."
    });
});


// Leave Management ODATA
app.use("/api/v1/leavemanagement", require("./routes/leavemanagement.routes"));



















app.listen(config["port"], () => {
    console.log(`Server listening on port: ${config["port"]}`);
});