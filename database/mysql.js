const mysql = require("mysql");

module.exports = class Mysql {
  static connect() {
    // establish connection
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "cumsdbms",
      port: "3306",
    });
    // connect to database
    db.connect((err) => {
      if (err) {
        throw err;
      }
      console.log("Mysql Connected");
    });
    return db;
  }
};
