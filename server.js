const express = require("express");
const app = express();

const mockuserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    messege: "got oner user",
    users: req.params.id,
  });
});

app.listen(8000, function () {
  console.log("server is running");
});
