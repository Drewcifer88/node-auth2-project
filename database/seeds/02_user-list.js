const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "Adam",
      password: bcrypt.hashSync("secretToMyGrave", 10),
      role: 1,
    },
    {
      username: "admin",
      password: bcrypt.hashSync("secretToMyGrave", 10),
      role: 1,
    },
    {
      username: "Drew",
      password: bcrypt.hashSync("secretToMyGrave", 10),
      role: 2,
    },
    {
      username: "Eric",
      password: bcrypt.hashSync("secretToMyGrave", 10),
    },
    {
      username: "lambda",
      password: bcrypt.hashSync("secretToMyGrave", 10),
    },
  ];

  return knex("users").insert(users);
};