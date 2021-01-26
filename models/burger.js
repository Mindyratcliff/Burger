//Dependencies

const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    insert: function(col, val, cb) {
      orm.insertOne("burgers", col, val, function(res) {
        cb(res);
      });
    },
    update: function(objColVal, state, cb) {
      orm.updateOne("burgers", objColVal, state, function(res) {
        cb(res);
      });
    }
  };
  
  

//Export
module.exports = burger;