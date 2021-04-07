const login = require('./login');
const register = require('./register');
const getAll = require('./getAll');

/** express module: Framework for build API
* @constant {module}
*/
const express = require('express');

/** Router
 * @constant {function}
 */
const router = express.Router();

router.use('/login', login);
router.use('/register', register);
router.use('/getUsers', getAll);

module.exports = router;
