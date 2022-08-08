const mysql = require("mysql2");
// Load .env variables
require("dotenv").config();
console.log(process.env);

// Connection to database
const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    dbConnectionSuccessful();
    init();
  }
});

dbConnectionSuccessful = () => {
  console.log("\n");
  console.log(
    ",----------------------------------------------------------------,"
  );
  console.log(
    "|                                                                |"
  );
  console.log(
    "|                                                                |"
  );
  console.log(
    "|    ___________              .__                                |"
  );
  console.log(
    "|    _   _____/ _____ ______ |  |   ____ ___.__. ____   ____    |"
  );
  console.log(
    "|     |    __)_ /     \\____ |  |  /  _ <   |  |/ __ _/ __    |"
  );
  console.log("|     |          Y Y    |_> >  |_(  <_> )___    ___/  ___/   |");
  console.log(
    "|    /_______  /__|_|  /   __/|____/____// ____|___  >___  >  |"
  );
  console.log("|            /      /|__|               /         /     /   |");
  console.log(
    "|       _____                                                    |"
  );
  console.log(
    "|      /      _____    ____ _____     ____   ___________        |"
  );
  console.log("|     /   /  \\__    /    \\__     / ____/ __ _  __        |");
  console.log("|    /    Y    / __ |   |  / __ _/ /_/  >  ___/|  | /       |");
  console.log(
    "|    ____|__  (____  /___|  (____  /___  / ___  >__|          |"
  );
  console.log("|            /     /     /     //_____/      /              |");
  console.log(
    "|                                                                |"
  );
  console.log(
    "|                                                                |"
  );
  console.log(
    "`----------------------------------------------------------------`"
  );
  console.log("\n");
};

module.exports = db;
