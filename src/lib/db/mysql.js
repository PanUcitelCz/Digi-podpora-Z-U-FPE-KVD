import mysql from "mysql2/promise";

// @ts-ignore
let mysqlconn = null;

export function mysqlconnFn() {
  // @ts-ignore
  if (!mysqlconn) {
    // used for development with MAMP
    // mysqlconn = mysql.createConnection({
    //   host: "127.0.0.1",
    //   user: "root",
    //   password: "",
    //   database: "statedata",
    // });
    mysqlconn = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "users",
    });
  }

  return mysqlconn;
}
