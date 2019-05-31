const express = require("express");
const formController = require("./formController");
const app = express();
const {getInventory} = require("./formController");

app.use(express.json());

app.get("/api/dashboard", getInventory);
// app.delete("/api/dashboard/:name", deleteInventory);
// app.post("/api/wishes", wishController.addWish);

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);
});
