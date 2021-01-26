//Dependencies

const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    
    insert: function(col, val, cb) {
      orm.insert("burgers", col, val, function(res) {
        cb(res);
      });
    },
    update: function(objColVal, state, cb) {
      orm.update("burgers", objColVal, state, function(res) {
        cb(res);
      });
    }
  };
  
  

//Export
module.exports = burger;