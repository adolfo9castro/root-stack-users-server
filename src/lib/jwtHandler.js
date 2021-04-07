/** Módulo manejador de tokens para las urls: Generación, Verificación y Creación de lista negra
 * @module generateToken
 * @author Adolfo Castro Noreña <castro09@gmail.com>
 * @requires jsonwebtoken
 */

/** Dependencia para uso de tokens
* @constant {module}
*/
const jwt = require('jsonwebtoken');

/** Función de Validación del token.
 * @param {String} token token a validar 
 * @returns {object} token generado
 */
async function decode(token) {
  return jwt.verify(token, process.env.secret, (error, decode) => {
    if (error) return ({ status: false, error });
    return {
      data: decode.data,
      status: true,
    };
  });
}

module.exports = {
  decode
};
