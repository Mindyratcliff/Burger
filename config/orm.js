const connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();

};

var orm = {
// selectAll()

all: function selectAll(tableData, cb) {
    var queryString = "SELECT * FROM " + tableData + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},
// insertOne()

insert: function insertOne(table, col, val, cb){
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(val.length);
    queryString += ") ";

    connection.query(queryString, val, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
},
// updateOne()

update: function updateOne(table, objColVal, newState, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVal);
    queryString += " WHERE ";
    queryString += newState;

    connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });

},

// deleteOne()


delete: function deleteOne(table, state, cb) {
  var queryString = "DELETE FROM " + table;

  queryString += " WHERE ";
  queryString += state;

  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
}
};


// Export the ORM object in module.exports.

module.exports = orm; 
