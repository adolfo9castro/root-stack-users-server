/** Modulo enrutador de peticiones para generar URL de autenticación
 * @author Adolfo Castro Noreña <castro09@gmail.com>
 * @requires express 
 * @requires ../controllers
 */

/** Framework para facilitar el uso de las rutas
* @constant {module}
*/
const express = require('express'),
  router = express.Router();

/** Middleware for validate consumer
 * @constant {module}
 */
const { accessValidate } = require('../middlewares');

/** Scheme for insert in to database
 * @constant {module}
 */
 const { findOne } = require('../scheme');

/** Función para el manejo del método POST (Validar Authorization Code)
 * @param {*} req Objeto con la petición
 * @param {*} res Objeto de respuesta a la petición
 * @returns {undefined}
 */
async function getUsers(req, res) {
  let {id} = req.body
  try {
    let response = await findOne(id) 
    if(response)res.status(200).json(response);
    else res.status(401).json('Uknow user');
  } catch (err) {
    console.log(`Failed processing data: ${JSON.stringify(req.body)} Error: ${JSON.stringify(err.message)}`);
    res.status(500).json('Internal error');
  }
}

router.use(accessValidate);

router.route('/').post(getUsers);


module.exports = router;
