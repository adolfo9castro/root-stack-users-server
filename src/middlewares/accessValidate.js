/** Módulo que contiene los validadores para las peticiones realizadas al MS
 * @module validators
 * @author Adolfo Castro Noreña <castro09@gmail.com>
 */

const { jwtHandler } = require('../lib');

/** Función para la validación del consumidor
 * @param {*} req Objeto con la petición
 * @param {*} res Objeto de respuesta a la petición
 * @param {*} next función de middleware para continuar
 * @returns {undefined}
 */
async function verifyConsumer(req, res, next) {
  try {
    const { authorization } = req.headers
    let toDecode = authorization.split(" ")
    let pass = await jwtHandler.decode(toDecode[1])
    if (pass.status) {
      next();
    } else {
      console.log(`Invalid bearer. request: ${JSON.stringify(toDecode)}`);
      res.status(403).json('Invalid user');
    }
  } catch (error) {
    console.log(`Server error: ${error}`);
    res.status(500).json(error);
  }

}

module.exports = verifyConsumer;
