const express = require("express");
const app = express();

const mockuserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    messege: "Successfully got users. Nice!",
    users: mockuserData,
  });
});

app.listen(8000, function () {
  console.log("server is running");
});
