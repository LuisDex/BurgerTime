var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "YOURHOSTNAMEHERE",
  port: 3306,
  user: "YOURUSERNAMEHERE",
  password: "YOURPASSWORDHERE",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
