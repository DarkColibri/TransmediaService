const debug = require("debug")("web:src:index.js");
debug("Init application.");

const express = require("express");

const container = require("./api/container");
// Llama la app, definido en el container.
const application = container.resolve("app");
// Cargamos la base de datos
const db = container.resolve("db");
const server = container.resolve("server");

application.start()
.then(async () => {

  await db.sequelize.sync({force: false});  // <<<<<< CONTROLAR ERROR
  
  // Insert VUE.
  server._express.use(express.static(__dirname + '/public'));

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  console.log("Application running on port " + server._config.PORT );
  
})
.catch(err => {
  console.error(err);
  process.exit();
});