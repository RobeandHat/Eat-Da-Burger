const orm = require("../config/orm.js");

const burger = {
  all(cb) {
    orm.all("burgers", (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => cb(res));
  },
};

module.exports = burger;
