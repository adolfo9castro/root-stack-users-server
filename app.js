/** Módulo principal del Microservicio de Autenticación
 * @author Adolfo Castro <castro09@gmail.com>
 * @requires express
 * @requires /routes
 */

/** Validador de peticiones y consumidores
 * @constant {module}
 */
//const validation = require('./src/middlewares');

const cors = require('cors');

/** express module: Framework for build API
 * @constant {module}
 */
const express = require('express');

/** Create application express
 * @constant {function}
 */
const app = express();

/** Allow corse
 * @constant {function}
 */
const corsAllowed = {
  "credentials": true,
  "origin": [
    "*",
    "https://adolfo9castro.github.io/",
  ],
  "allowedHeaders": [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "x-consumer-id",
    "Authorization"
  ]
}
app.use(cors(corsAllowed));

/** Routes Message
 * @constant {module}
 */
const routes = require('./src/routes');

// Middleware Configuration
app.use(express.json());

// API Declaration
app.use('/', routes);

// Error handler
app.use((req, res) => {
  res.sendStatus(404);
});

module.exports = app;
