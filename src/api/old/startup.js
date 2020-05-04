/**
 * Configuración del servidor.
 */

const debug = require("debug")("web:src:api:startup.js");
debug("INICIO");

class StartUp {
  constructor({ server }) {
    this._server = server;
  }

  // Iniciamos el servidor
  async start() {
    await this._server.start();
  }
}

module.exports = StartUp;