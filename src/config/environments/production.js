/** 
 * CUIDADO - Apunta a DEVELOPMENT
*/

module.exports = {
    PORT: process.env.PORT,
    DB: {
      username: "root",
      password: "ortega__",
      database: "transmedia_schema",
      host: "localhost",
      dialect: "mysql",
      logging: false
    }
  };