/** Configuración del servidor
 * @author Adolfo Castro <castro09@gmail.com>
 * @requires ./src/configuration
 */

/** Función de lanzamiento del servidor
 * @returns {undefined}
 */
function launchServer() {  
  if (JSON.parse(process.env.LOCAL || 'false')) {
    console.log(`🚀 Server starting on port: ${process.env.PORT}`);
  }
}

/** Llamado a función para obtener las configuraciones de la instancia
 * @returns {Promise}
 */
const app = require('./app');
app.listen(process.env.PORT, launchServer);
