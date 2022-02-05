const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/tasks", require("./routes/tasks"));

app.use(express.static(__dirname + "/public"));

app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
