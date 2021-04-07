/**
 * Funcion encargada de definir el modelo 'faqs' con los atributos necesarios
 * @param {Object} sequelize instancia del ORM
 * @param {Object} DataTypes instancia de los tipos de datos manejados por el ORM
 * @returns {Object} Retorna un objeto que representa la entidad 'faqs'
 */
function model(sequelize, DataTypes) {
  const atributes = {
    email: DataTypes.STRING(100),
    password: DataTypes.TEXT
  };
  const config = {
    timestamps: false,
    freezeTableName: true,
  };
  return sequelize.define('users', atributes, config);
}

module.exports = model;
