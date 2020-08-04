const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockuserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    messege: "successfully got users. Nice!",
    usees: mockuserData,
  });
});
app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    messege: "got oner user",
    users: req.params.id,
  });
});
app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";
  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      messege: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      messege: "password and username do not match",
    });
  }
});

app.listen(8000, function () {
  console.log("server is running");
});
