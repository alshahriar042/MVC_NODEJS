const path = require("path");
const users = require("../models/users.model");
exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
};

exports.saveUSer = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  // res.send(name);
  const user = {
    name,
    age,
  };

  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};
